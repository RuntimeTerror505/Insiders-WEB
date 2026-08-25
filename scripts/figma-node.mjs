#!/usr/bin/env node
// Читає ноду з Figma через REST API і друкує її як дерево + типографіку + кольори.
// Обходить квоту MCP на Starter-плані: REST доступний і на безкоштовному тарифі.
//
//   node scripts/figma-node.mjs 100-630
//   node scripts/figma-node.mjs "https://figma.com/design/KEY/Name?node-id=100-630"
//   node scripts/figma-node.mjs 100-630 --png --assets
//
// Токен: змінна оточення FIGMA_TOKEN або файл ~/.figma-token
// (Figma → Settings → Security → Personal access tokens, скоуп File content: read-only)

import { mkdir, readFile, writeFile } from "node:fs/promises";
import { homedir } from "node:os";
import { dirname, join } from "node:path";

const DEFAULT_FILE_KEY = process.env.FIGMA_FILE_KEY ?? "chOTkV2VURgGT68ZTHd7Th";
const API = "https://api.figma.com/v1";
const MAX_RETRY_AFTER = 300; // секунд — довше не чекаємо

/* ── аргументи ─────────────────────────────────────────────────────── */

const argv = process.argv.slice(2);
const flags = new Map(
  argv
    .filter((a) => a.startsWith("--"))
    .map((a) => {
      const [k, v] = a.slice(2).split("=");
      return [k, v ?? true];
    }),
);
const target = argv.find((a) => !a.startsWith("--"));

if (!target || flags.has("help")) {
  console.log(`
Usage: node scripts/figma-node.mjs <node-id|figma-url> [flags]

  --file=KEY     file key (типово ${DEFAULT_FILE_KEY})
  --depth=N      обмежити глибину дерева
  --raw[=path]   зберегти сирий JSON
  --png[=scale]  відрендерити ноду в PNG (типово 2x)
  --assets[=dir] завантажити растрові image-fills (типово public/figma)
  --out=dir      куди класти png/assets (типово .figma-out)
`);
  process.exit(target ? 0 : 1);
}

// приймаємо і повний URL, і голий node-id
function parseTarget(value) {
  if (!value.includes("figma.com")) {
    return { fileKey: String(flags.get("file") ?? DEFAULT_FILE_KEY), nodeId: value.replace("-", ":") };
  }
  const url = new URL(value);
  const parts = url.pathname.split("/").filter(Boolean);
  // /design/:fileKey/:name  або  /design/:fileKey/branch/:branchKey/:name
  const fileKey = parts[2] === "branch" ? parts[3] : parts[1];
  const nodeId = url.searchParams.get("node-id");
  if (!nodeId) throw new Error("у посиланні немає node-id — скопіюй лінк на виділений фрейм (Cmd+L)");
  return { fileKey, nodeId: nodeId.replace("-", ":") };
}

/* ── токен і запити ────────────────────────────────────────────────── */

async function readToken() {
  if (process.env.FIGMA_TOKEN) return process.env.FIGMA_TOKEN.trim();
  try {
    return (await readFile(join(homedir(), ".figma-token"), "utf8")).trim();
  } catch {
    throw new Error("немає токена: постав FIGMA_TOKEN або поклади його в ~/.figma-token");
  }
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Figma віддає 429 доволі охоче — чекаємо Retry-After і пробуємо ще раз
async function api(token, path, attempt = 0) {
  const res = await fetch(`${API}${path}`, {
    headers: { "X-Figma-Token": token },
    signal: AbortSignal.timeout(60_000),
  });
  if (res.status === 429 && attempt < 4) {
    // Figma інколи віддає Retry-After у кілька діб — це вичерпана квота,
    // чекати немає сенсу. Короткі паузи ретраїмо, довгі — падаємо з поясненням.
    const after = Number(res.headers.get("retry-after"));
    if (after > MAX_RETRY_AFTER) {
      throw new Error(
        `Figma rate limit: квота вичерпана, Retry-After ${Math.round(after / 3600)}год. ` +
          `Спробуй пізніше або з іншого токена.`,
      );
    }
    const wait = after || 2 ** attempt * 15;
    console.warn(`  rate limit — чекаю ${wait}s…`);
    await sleep(wait * 1000);
    return api(token, path, attempt + 1);
  }
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Figma API ${res.status}: ${body.slice(0, 300)}`);
  }
  return res.json();
}

/* ── форматування ──────────────────────────────────────────────────── */

const hex = ({ r, g, b }) =>
  "#" + [r, g, b].map((c) => Math.round(c * 255).toString(16).padStart(2, "0")).join("");

const num = (n) => (typeof n === "number" ? String(Math.round(n * 100) / 100) : "-");

function paint(p) {
  if (p.visible === false) return null;
  if (p.type === "SOLID") {
    const a = p.opacity ?? p.color.a ?? 1;
    return hex(p.color) + (a < 1 ? ` @${num(a)}` : "");
  }
  if (p.type === "IMAGE") return `image:${p.imageRef}`;
  if (p.type?.startsWith("GRADIENT")) {
    return `${p.type}(${(p.gradientStops ?? []).map((s) => hex(s.color)).join(" → ")})`;
  }
  return p.type;
}

const paints = (list) => (list ?? []).map(paint).filter(Boolean).join(", ");

function* walk(node, depth = 0) {
  yield [node, depth];
  for (const child of node.children ?? []) yield* walk(child, depth + 1);
}

/* ── секції звіту ──────────────────────────────────────────────────── */

function printTree(root, maxDepth) {
  console.log("\n═══ СТРУКТУРА ═══\n");
  for (const [n, d] of walk(root)) {
    if (maxDepth != null && d > maxDepth) continue;
    const box = n.absoluteBoundingBox;
    const size = box ? ` [${Math.round(box.width)}×${Math.round(box.height)}]` : "";
    const layout = n.layoutMode
      ? `  ${n.layoutMode.toLowerCase()} gap=${num(n.itemSpacing ?? 0)}` +
        ` pad=${[n.paddingTop, n.paddingRight, n.paddingBottom, n.paddingLeft].map((v) => num(v ?? 0)).join("/")}` +
        (n.primaryAxisAlignItems ? ` main=${n.primaryAxisAlignItems}` : "") +
        (n.counterAxisAlignItems ? ` cross=${n.counterAxisAlignItems}` : "")
      : "";
    const name = n.name.length > 46 ? n.name.slice(0, 46) + "…" : n.name;
    console.log(`${"  ".repeat(d)}${n.type} «${name}»${size}${layout}  ${n.id}`);
  }
}

function printText(root) {
  const nodes = [...walk(root)].map(([n]) => n).filter((n) => n.type === "TEXT");
  if (!nodes.length) return;
  console.log("\n═══ ТИПОГРАФІКА ═══\n");
  const seen = new Map();
  for (const n of nodes) {
    const s = n.style ?? {};
    const key = [s.fontFamily, s.fontWeight, s.fontSize, num(s.lineHeightPx), num(s.letterSpacing), paints(n.fills)].join("|");
    if (!seen.has(key)) seen.set(key, []);
    seen.get(key).push(n.name.replace(/\s+/g, " ").slice(0, 34));
  }
  for (const [key, names] of seen) {
    const [family, weight, size, lh, ls, color] = key.split("|");
    console.log(`${family} ${weight} · ${size}/${lh}${ls !== "0" ? ` · ls ${ls}` : ""} · ${color || "-"}`);
    console.log(`   ${names.map((t) => `«${t}»`).join(", ")}\n`);
  }
}

function printPaints(root) {
  console.log("\n═══ КОЛЬОРИ / БОРДЕРИ / ТІНІ ═══\n");
  for (const [n] of walk(root)) {
    if (n.type === "TEXT") continue;
    const bits = [];
    const fill = paints(n.fills);
    if (fill) bits.push(`fill ${fill}`);
    const stroke = paints(n.strokes);
    if (stroke) bits.push(`stroke ${stroke} ${num(n.strokeWeight)}px`);
    if (n.cornerRadius != null) bits.push(`radius ${num(n.cornerRadius)}`);
    else if (n.rectangleCornerRadii) bits.push(`radius ${n.rectangleCornerRadii.map(num).join("/")}`);
    for (const fx of n.effects ?? []) {
      if (fx.visible === false) continue;
      bits.push(
        fx.type.includes("SHADOW")
          ? `${fx.type} ${num(fx.offset?.x)}/${num(fx.offset?.y)} blur ${num(fx.radius)} spread ${num(fx.spread ?? 0)} ${hex(fx.color)} @${num(fx.color.a)}`
          : `${fx.type} ${num(fx.radius)}`,
      );
    }
    if (bits.length) console.log(`${n.type} «${n.name.slice(0, 34)}»  ${bits.join("  ·  ")}`);
  }
}

/* ── завантаження ──────────────────────────────────────────────────── */

async function download(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`download ${res.status} ${url}`);
  await writeFile(dest, Buffer.from(await res.arrayBuffer()));
  return dest;
}

async function renderPng(token, fileKey, nodeId, outDir, scale) {
  const id = encodeURIComponent(nodeId);
  const { images, err } = await api(token, `/images/${fileKey}?ids=${id}&format=png&scale=${scale}`);
  if (err) throw new Error(`render: ${err}`);
  const url = images[nodeId];
  if (!url) return console.warn("PNG: Figma не повернула URL для цієї ноди");
  const dest = join(outDir, `${nodeId.replace(":", "-")}@${scale}x.png`);
  await download(url, dest);
  console.log(`\nPNG → ${dest}`);
}

async function downloadAssets(token, fileKey, root, outDir) {
  const refs = new Map();
  for (const [n] of walk(root)) {
    for (const f of n.fills ?? []) {
      if (f.type === "IMAGE" && f.imageRef && !refs.has(f.imageRef)) refs.set(f.imageRef, n.name);
    }
  }
  if (!refs.size) return console.log("\nРастрових image-fills не знайдено");
  const { meta } = await api(token, `/files/${fileKey}/images`);
  console.log(`\n═══ АССЕТИ (${refs.size}) ═══\n`);
  for (const [ref, name] of refs) {
    const url = meta?.images?.[ref];
    if (!url) {
      console.warn(`  ${name}: немає URL для ${ref}`);
      continue;
    }
    // розширення беремо з S3-URL, бо Figma віддає і png, і svg, і jpg
    const ext = (new URL(url).pathname.match(/\.(png|jpe?g|svg|gif|webp)$/i)?.[1] ?? "png").toLowerCase();
    const safe = name.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "").toLowerCase() || ref.slice(0, 8);
    const dest = join(outDir, `${safe}.${ext}`);
    await download(url, dest);
    console.log(`  ${name} → ${dest}`);
  }
}

/* ── main ──────────────────────────────────────────────────────────── */

const { fileKey, nodeId } = parseTarget(target);
const token = await readToken();
const outDir = String(flags.get("out") ?? ".figma-out");

const data = await api(token, `/files/${fileKey}/nodes?ids=${encodeURIComponent(nodeId)}`);
const entry = data.nodes?.[nodeId];
if (!entry) throw new Error(`ноду ${nodeId} не знайдено у файлі ${fileKey}`);

const root = entry.document;
console.log(`\n${data.name} · «${root.name}» (${nodeId}) · змінено ${data.lastModified}`);

printTree(root, flags.has("depth") ? Number(flags.get("depth")) : null);
printText(root);
printPaints(root);

if (flags.has("raw")) {
  const dest =
    flags.get("raw") === true ? join(outDir, `${nodeId.replace(":", "-")}.json`) : String(flags.get("raw"));
  await mkdir(dirname(dest), { recursive: true });
  await writeFile(dest, JSON.stringify(entry, null, 2));
  console.log(`\nRaw JSON → ${dest}`);
}

if (flags.has("png") || flags.has("assets")) await mkdir(outDir, { recursive: true });
if (flags.has("png")) {
  // --png без значення означає 2x, а не Number(true) === 1
  const scale = flags.get("png") === true ? 2 : Number(flags.get("png")) || 2;
  await renderPng(token, fileKey, nodeId, outDir, scale);
}
if (flags.has("assets")) {
  const dir = flags.get("assets") === true ? outDir : String(flags.get("assets"));
  await mkdir(dir, { recursive: true });
  await downloadAssets(token, fileKey, root, dir);
}
