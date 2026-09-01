import type { ReactNode } from "react";
import Link from "next/link";

/** Розділ статті: заголовок H2 і абзаци під ним */
export type ArticleSection = {
  id: string;
  title: string;
  body: ReactNode[];
  /** Таблиця йде після абзаців розділу */
  table?: { head: string[]; rows: ReactNode[][] };
  /** Абзаци після таблиці */
  after?: ReactNode[];
};

/** Пункт змісту в сайдбарі. Без id рендериться текстом, а не посиланням. */
export type TocGroup = {
  title: string;
  id?: string;
  items?: { label: string; id?: string }[];
};

export type Article = {
  /** Абзаци над першим H2 */
  intro: ReactNode[];
  sections: ArticleSection[];
  toc: TocGroup[];
  cta: { title: string; action: string };
};

const link = "text-primary underline underline-offset-4 hover:no-underline";

/**
 * Тіло статті з макета «Blog Article» (нода 377:2372).
 *
 * TODO: мок-контент. Зміст у сайдбарі взятий із макета дослівно, тому
 * частина пунктів не має відповідних розділів у тексті — вони рендеряться
 * без посилання. Замінити разом із реальними статтями.
 */
const crossPlatform: Article = {
  intro: [
    "A few years ago, building a mobile app meant making one of the toughest choices in your project: do you build for iOS or Android first? Or do you double your budget and build both?",
    "That choice is no longer the only option.",
    "Cross platform app development lets you build one app that runs beautifully on both iOS and Android using a single codebase. It saves time. It saves money. And in 2026, it has become the default approach for most businesses building modern mobile apps.",
    "This guide covers everything you need to know. What cross platform development actually is. How it compares to native. Which frameworks to consider. What the trade-offs are. And how to decide if it is the right approach for your project.",
  ],
  sections: [
    {
      id: "what-is-cross-platform",
      title: "What Is Cross Platform App Development?",
      body: [
        "Cross platform app development is the practice of building a single mobile application that runs on multiple operating systems, primarily iOS and Android, from one shared codebase.",
        "Instead of building two separate apps with two separate teams using two different programming languages, you build one app once. That single codebase compiles to both platforms.",
        "Think of it like writing a book once and publishing it in both English and Spanish without rewriting every page. The story stays the same. Only the delivery adapts.",
        "The key thing that has changed in 2026 is that cross platform apps no longer feel like a compromise. Modern frameworks like Flutter and React Native produce apps that look, feel, and perform almost identically to native apps for the vast majority of use cases.",
      ],
    },
    {
      id: "why-default",
      title: "Why Cross Platform Has Become the Default in 2026",
      body: [
        <>
          The shift toward cross platform is no accident. According to the 2024{" "}
          <Link href="https://survey.stackoverflow.co/2024/" className={link}>
            Stack Overflow Developer Survey
          </Link>
          , Flutter and React Native are now among the most widely used
          frameworks by professional developers worldwide, with Flutter at 9.4
          percent and React Native at 8.4 percent of professional usage. Among
          developers learning to code, Flutter sits at 11.1 percent, signaling
          where the industry is heading.
        </>,
        "Several forces have driven this shift:",
        <>
          <strong className="font-bold">Speed to market.</strong> Businesses
          cannot afford to wait six months for an iOS launch and another six
          months for an Android launch. One codebase means one release.
        </>,
        <>
          <strong className="font-bold">Cost pressure.</strong> Hiring two
          specialized teams (iOS and Android) is significantly more expensive
          than hiring one cross platform team.
        </>,
        <>
          <strong className="font-bold">Quality has caught up.</strong> The
          performance and visual quality gap that existed five years ago has
          largely closed. A well-built Flutter or React Native app feels
          indistinguishable from native to most users.
        </>,
        <>
          <strong className="font-bold">Community and tooling maturity.</strong>{" "}
          Both Flutter and React Native now have huge communities, mature
          libraries, and corporate backing from Google and Meta respectively.
        </>,
        <>
          <strong className="font-bold">Talent availability.</strong> Finding
          skilled cross platform developers is now often easier than finding
          senior iOS or Android specialists.
        </>,
        "For most business apps in 2026, cross platform is no longer the cheap alternative. It is simply the smart default.",
      ],
    },
    {
      id: "vs-native-vs-hybrid",
      title: "Cross Platform vs Native vs Hybrid: The Real Difference",
      body: [
        "Before going deeper, it helps to be clear on terminology because these terms get used inconsistently.",
      ],
      table: {
        head: ["Approach", "Examples", "How It Works"],
        rows: [
          [
            "Native",
            "Swift (iOS), Kotlin (Android)",
            "Built specifically for one OS using its own tools and language. Best performance and deepest hardware access.",
          ],
          [
            "Cross Platform",
            "Flutter, React Native",
            "One shared codebase compiles to native or near-native code on both platforms. Real apps, not web apps.",
          ],
          [
            "WebView Hybrid",
            "Ionic with Capacitor, Cordova",
            "A web app rendered inside a native WebView shell. Older technology, simpler use cases.",
          ],
        ],
      },
      after: [
        "For this guide, we focus on cross platform frameworks, the modern category that dominates business app development today.",
        <>
          If you want a deeper comparison of native vs cross platform, our{" "}
          <Link href="/blog/cross-platform-mobile-app-development-2026" className={link}>
            native vs hybrid mobile apps guide
          </Link>{" "}
          breaks down the architecture, performance, and decision factors in
          detail.
        </>,
      ],
    },
    {
      id: "top-frameworks",
      title: "The Top Cross Platform Frameworks",
      body: [
        "There are several cross platform frameworks available, but two dominate the market: Flutter and React Native. These are the frameworks worth seriously evaluating in 2026.",
        "Other frameworks like Xamarin (now .NET MAUI) and Ionic exist and are sometimes the right choice for specific situations, but Flutter and React Native cover the vast majority of business needs.",
      ],
    },
    {
      id: "flutter-explained",
      title: "Flutter Explained",
      body: [
        "Flutter is Google's open-source cross platform framework, first released in 2017. It uses Google's Dart programming language and has its own rendering engine that draws every pixel of the app's interface directly.",
        "Other frameworks like Xamarin (now .NET MAUI) and Ionic exist and are sometimes the right choice for specific situations, but Flutter and React Native cover the vast majority of business needs.",
      ],
    },
  ],
  toc: [
    {
      title: "Understanding Cross-Platform Mobile App Development",
      id: "what-is-cross-platform",
      items: [
        { label: "Benefits of Cross-Platform Mobile Apps" },
        { label: "How Cross-Platform Development Works" },
      ],
    },
    {
      title: "Benefits of Cross-Platform Mobile App Development",
      id: "why-default",
      items: [
        { label: "Cost-effectiveness and Efficiency" },
        { label: "Wider Audience Reach" },
        { label: "Simplified Maintenance and Updates" },
      ],
    },
    {
      title: "Top Frameworks for Cross-Platform Mobile App Development",
      id: "top-frameworks",
      items: [
        { label: "Flutter vs. React Native: Which is Better?" },
        { label: "Ionic Framework Overview" },
        { label: "Xamarin Advantages and Disadvantages" },
        { label: "Other Notable Frameworks" },
      ],
    },
    {
      title: "Is Cross-Platform App Development Worth It?",
      id: "vs-native-vs-hybrid",
      items: [
        { label: "Analyzing Performance vs. Native Apps" },
        { label: "Use Cases Where Cross-Platform Excels" },
        { label: "When to Choose Native Over Cross-Platform" },
      ],
    },
    {
      title: "Choosing the Right Partner for Your Cross-Platform App Development",
      items: [
        { label: "Key Qualities to Look For in a Development Partner" },
        { label: "Insiders' Expertise in AI-Driven Cross-Platform Solutions" },
        { label: "Client Success Stories Leveraging Cross-Platform Development" },
      ],
    },
    {
      title: "Future Trends in Cross-Platform Mobile App Development",
      items: [
        { label: "The Role of AI and Machine Learning" },
        { label: "Predictions for 2027 and Beyond" },
      ],
    },
    { title: "Conclusion" },
    { title: "Meet Our Expert Flutter Development Team", id: "flutter-explained" },
  ],
  cta: { title: "Custom App Development", action: "Contact Us" },
};

/**
 * Стаття для першого поста сітки. Будова та сама, що й у макета
 * «Blog Article»: лід, розділи з H2, жирні зачини абзаців, порівняльна
 * таблиця і зміст у сайдбарі — але зміст під тему самого поста.
 */
const procurementAggregator: Article = {
  intro: [
    "Fifteen government procurement platforms. No public APIs. Two writing systems. And a deadline measured in days, not months.",
    "That was the brief: build one search box that answers a single question — which tenders, across every platform that matters, are worth this company's time today?",
    "This is how we built it, what broke along the way, and which decisions we would make differently now.",
  ],
  sections: [
    {
      id: "the-brief",
      title: "What We Were Actually Asked to Build",
      body: [
        "The client did not want another tender board. They wanted the opposite: fewer results, ranked by whether their team could realistically win them.",
        "That reframing changed the architecture. An aggregator that returns everything is a scraping problem. An aggregator that returns the right things is a scraping problem plus a ranking problem plus a data quality problem — and the last two are where the work actually is.",
        "We scoped it as three layers: collect reliably, normalise ruthlessly, then enrich with AI only where a human would otherwise have to read the document.",
      ],
    },
    {
      id: "fifteen-sources",
      title: "Why Fifteen Sources Is a Different Problem Than One",
      body: [
        "Scraping one site is a weekend. Scraping fifteen is an operations problem, because the failure modes stop being independent.",
        <>
          <strong className="font-bold">Every source has its own idea of a tender.</strong>{" "}
          Deadlines in local time with no timezone. Budgets as free text
          (&quot;approximately 2.5M&quot;). Categories that overlap but never
          match. Normalising this is most of the codebase.
        </>,
        <>
          <strong className="font-bold">Sources break silently.</strong> A
          markup change does not throw an error — it returns zero results, which
          looks exactly like a quiet day on the platform. We ended up alerting on
          volume anomalies per source rather than on exceptions.
        </>,
        <>
          <strong className="font-bold">Rate limits are undocumented.</strong>{" "}
          You discover them by getting banned. Each source got its own budget,
          backoff, and a circuit breaker that parks it for an hour instead of
          hammering it.
        </>,
        <>
          <strong className="font-bold">Freshness matters more than coverage.</strong>{" "}
          A tender found two days late is worthless. We polled high-value sources
          every fifteen minutes and the long tail twice a day.
        </>,
        "The practical consequence: we spent more engineering time on observability than on parsing.",
      ],
    },
    {
      id: "collection-strategy",
      title: "Three Ways to Collect, and When Each One Wins",
      body: [
        "There is no single right way to pull data off a procurement portal. We used all three, chosen per source, and the choice drives both cost and fragility.",
      ],
      table: {
        head: ["Approach", "Used For", "Trade-off"],
        rows: [
          [
            "Hidden JSON",
            "Portals with a JS front-end",
            "Fastest and most stable. The endpoint the site's own front-end calls returns clean, typed data — when you can find it.",
          ],
          [
            "HTML parsing",
            "Server-rendered listings",
            "Cheap to run, expensive to maintain. Breaks on any redesign, so it needs volume alerts rather than error alerts.",
          ],
          [
            "Headless browser",
            "Sources behind bot walls",
            "Works when nothing else does, but costs roughly two orders of magnitude more per page and is the first thing to fall over under load.",
          ],
        ],
      },
      after: [
        "Roughly two thirds of the sources ended up on hidden JSON endpoints. Those are the ones that still run untouched a year later.",
        <>
          If you are weighing a similar build, our{" "}
          <Link href="/services/product-development" className={link}>
            product development approach
          </Link>{" "}
          covers how we scope this kind of discovery work before writing code.
        </>,
      ],
    },
    {
      id: "anti-bot",
      title: "The Anti-Bot Wall",
      body: [
        "Four of the fifteen sources actively defended against automated access. Not with CAPTCHAs — with fingerprinting.",
        "The tell was that a plain HTTP client got a 200 with an empty result set, while a real browser got the data. The server was not blocking us. It was lying to us.",
        "We moved those sources to a headless browser pool with realistic viewport, timezone, and header ordering, and pulled them on a slower schedule. Politeness turned out to be the cheapest anti-ban strategy: at one request every few seconds, nothing ever escalated.",
        "We deliberately did not attempt to defeat any measure that looked like an explicit access policy. Where a source published terms, we stayed inside them and flagged the gaps to the client rather than routing around them.",
      ],
    },
    {
      id: "ten-gigabytes",
      title: "The 10 GB Response That Took the Site Down",
      body: [
        "Two weeks in, the whole thing went down in the middle of the afternoon. No deploy, no traffic spike.",
        "One source had a paginated endpoint with a page-size parameter. Someone on their side removed the server-side cap. Our collector, asking for a large page like it always had, received a single JSON response of roughly ten gigabytes and read it straight into memory.",
        <>
          <strong className="font-bold">The fix was three lines.</strong> Stream
          the response instead of buffering it, and abort past a hard byte ceiling.
        </>,
        <>
          <strong className="font-bold">The lesson was bigger.</strong> Every
          assumption about an upstream response — size, shape, encoding, whether
          it terminates — is a promise made by someone with no obligation to keep
          it. We now cap bytes, time, and record count on every external call.
        </>,
      ],
    },
    {
      id: "bilingual-search",
      title: "Bilingual Search Without Maintaining Two Indexes",
      body: [
        "Tenders arrived in two languages and two writing systems. Users expected to type in either and find both.",
        "The obvious approach — translate everything into one pivot language at ingest — loses the exact legal phrasing that procurement search depends on. Names of standards, agencies, and product codes have to survive verbatim.",
        "We indexed the original text and stored a normalised parallel field alongside it, then queried both with different weights. Exact matches on the original always outrank semantic matches on the translation.",
        "The AI enrichment layer is narrow on purpose: it summarises requirements and tags the tender against the client's capability list. It never rewrites source text, and every enriched field links back to the paragraph it came from so a human can check it in one click.",
      ],
    },
    {
      id: "what-we-would-change",
      title: "What We Would Do Differently",
      body: [
        "Build the normalisation schema before the first scraper, not after the third. We retrofitted it, and every collector had to be touched twice.",
        "Treat each source as a service with its own health, budget, and owner from day one. We arrived there eventually, but only after debugging silence.",
        "And measure freshness, not volume, as the headline metric. Volume looks healthy right up until the moment the data is stale.",
      ],
    },
  ],
  toc: [
    {
      title: "How the Aggregator Was Scoped",
      id: "the-brief",
      items: [
        { label: "Fewer results, ranked by winnability" },
        { label: "Collect, normalise, enrich" },
      ],
    },
    {
      title: "Working With Fifteen Independent Sources",
      id: "fifteen-sources",
      items: [
        { label: "Every source defines a tender differently" },
        { label: "Sources break silently, not loudly" },
        { label: "Freshness beats coverage" },
      ],
    },
    {
      title: "Choosing a Collection Strategy",
      id: "collection-strategy",
      items: [
        { label: "Hidden JSON endpoints" },
        { label: "HTML parsing" },
        { label: "Headless browsers" },
      ],
    },
    {
      title: "Getting Past the Anti-Bot Wall",
      id: "anti-bot",
      items: [
        { label: "Fingerprinting, not CAPTCHAs" },
        { label: "Politeness as a ban-avoidance strategy" },
      ],
    },
    {
      title: "The Outage: A 10 GB JSON Response",
      id: "ten-gigabytes",
      items: [
        { label: "Streaming instead of buffering" },
        { label: "Capping bytes, time, and records" },
      ],
    },
    {
      title: "Bilingual Search and AI Enrichment",
      id: "bilingual-search",
      items: [
        { label: "Why translating at ingest loses meaning" },
        { label: "Keeping enrichment traceable" },
      ],
    },
    { title: "What We Would Do Differently", id: "what-we-would-change" },
    { title: "Talk to the Team That Built It" },
  ],
  cta: { title: "Custom Data Platforms", action: "Contact Us" },
};

/** Стаття третього поста: як виглядає MVP за три тижні зсередини. */
const mvpInThreeWeeks: Article = {
  intro: [
    "Three weeks is not a marketing number. It is the amount of time it takes a small senior team to turn a clear idea into something a real user can open, use, and complain about.",
    "The catch is in the word “clear”. Three weeks buys you execution, not discovery. If the scope is still moving on day four, no amount of speed will save the release.",
    "This is the cut list we actually use, the four things we refuse to cut no matter the deadline, and what happened to the products that shipped this way.",
  ],
  sections: [
    {
      id: "what-three-weeks-means",
      title: "What Three Weeks Actually Means",
      body: [
        "It means one flow. Not one app — one flow. A user arrives, does the single thing the product exists for, and gets a result worth coming back to.",
        "Everything that is not on that path is a candidate for the cut list. Settings screens, onboarding carousels, profile editing, dark mode, admin panels: all of it can wait, and most of it should.",
        "The teams that miss three weeks almost never miss because engineering was slow. They miss because the flow was never agreed on, and week two was spent relitigating week one.",
      ],
    },
    {
      id: "the-cut-list",
      title: "The Cut List",
      body: [
        "These are the defaults we remove before the first commit, and put back only if someone can explain what breaks without them.",
        <>
          <strong className="font-bold">Custom auth.</strong> Email magic link or
          a provider SDK. Building password reset, session management, and
          account recovery from scratch costs the better part of a week and
          impresses nobody.
        </>,
        <>
          <strong className="font-bold">The admin panel.</strong> For the first
          weeks, the admin panel is the database console and one internal
          engineer. Building CRUD screens for a team of three is a waste.
        </>,
        <>
          <strong className="font-bold">Offline mode.</strong> Real offline
          support means conflict resolution, and conflict resolution is a
          product decision, not a technical one. It belongs after you know how
          people use the app.
        </>,
        <>
          <strong className="font-bold">Push notifications.</strong> Easy to add,
          expensive to get right. Send nothing rather than send noise into an
          empty product.
        </>,
        <>
          <strong className="font-bold">The second platform.</strong> Even on a
          cross-platform stack, ship one store first. Two review queues in week
          three is a needless risk.
        </>,
      ],
    },
    {
      id: "what-we-keep",
      title: "What We Refuse to Cut",
      body: [
        "Four things stay in scope regardless of the deadline, because removing them does not save time — it moves the cost somewhere more expensive.",
      ],
      table: {
        head: ["Area", "In Scope", "Why It Stays"],
        rows: [
          [
            "Crash reporting",
            "Day one",
            "Without it, the first week after launch is guesswork. Costs an hour to wire up and pays for itself on the first bug report.",
          ],
          [
            "Analytics on the core flow",
            "Day one",
            "Three events: started, completed, dropped. Enough to know whether the thing you built is the thing people use.",
          ],
          [
            "CI and one-command deploy",
            "Day two",
            "Manual releases eat the third week. Automating it early is faster than doing it twice by hand.",
          ],
          [
            "A real data model",
            "Always",
            "Shortcuts in the schema are the debt that survives the rewrite. This is the one place where speed costs the most later.",
          ],
        ],
      },
      after: [
        <>
          These four are also what make the difference between an MVP and a
          demo. If you want the longer version of how we scope this, our{" "}
          <Link href="/services/product-development" className={link}>
            product development page
          </Link>{" "}
          covers the estimate and the team shape.
        </>,
      ],
    },
    {
      id: "the-rhythm",
      title: "The Daily Rhythm That Makes It Work",
      body: [
        "There is no standup theatre. There is a build in the client’s hands every single day, starting on day three.",
        "A daily build changes the conversation from opinions to observations. Nobody argues about a wireframe when they can open the thing on their phone and tell you the button is in the wrong place.",
        "It also surfaces scope creep immediately. A request that arrives on day twelve is visibly a request to remove something else, because the end date does not move.",
      ],
    },
    {
      id: "after-launch",
      title: "What Happens After Launch",
      body: [
        "The first week after release is not a victory lap. It is the most valuable data collection window the product will ever have.",
        "We keep the same team on for that week specifically. The people who wrote the code are the fastest at fixing what the first hundred users find, and handing over during that window throws away everything the team learned.",
        "The pattern we see repeatedly: roughly a third of the cut list turns out to be genuinely unnecessary, a third gets built in the following sprint, and a third gets replaced by something nobody had thought of before real users arrived.",
      ],
    },
    {
      id: "would-we-again",
      title: "When Three Weeks Is the Wrong Answer",
      body: [
        "This approach fails in three situations, and it is worth naming them.",
        "When the product is regulated — health data, payments, anything with an audit trail — the compliance work is not compressible and pretending otherwise is dishonest.",
        "When the value is in an integration you do not control, the timeline belongs to whoever owns that API, not to you.",
        "And when the idea is genuinely unproven, three weeks of building is worse than one week of talking to people. Speed applied to the wrong thing is just a faster way to be wrong.",
      ],
    },
  ],
  toc: [
    {
      title: "Scoping a Three-Week Release",
      id: "what-three-weeks-means",
      items: [
        { label: "One flow, not one app" },
        { label: "Why teams miss the date" },
      ],
    },
    {
      title: "The Cut List",
      id: "the-cut-list",
      items: [
        { label: "Custom auth" },
        { label: "Admin panel and offline mode" },
        { label: "Push and the second platform" },
      ],
    },
    {
      title: "What Stays In Scope Regardless",
      id: "what-we-keep",
      items: [
        { label: "Crash reporting and analytics" },
        { label: "CI and one-command deploy" },
        { label: "The data model" },
      ],
    },
    {
      title: "The Daily Build Rhythm",
      id: "the-rhythm",
      items: [{ label: "How a daily build stops scope creep" }],
    },
    {
      title: "The First Week After Launch",
      id: "after-launch",
      items: [{ label: "Why the same team stays on" }],
    },
    { title: "When Three Weeks Is the Wrong Answer", id: "would-we-again" },
    { title: "Talk to the Team" },
  ],
  cta: { title: "Ship Your MVP", action: "Contact Us" },
};

/** Стаття четвертого поста: аудит технічного боргу за один спринт. */
const techDebtAudit: Article = {
  intro: [
    "Technical debt almost never appears in the backlog under that name. It appears on the invoice.",
    "It is the cloud bill that grew forty percent while traffic stayed flat. The release that takes a week because three steps are manual. The support hours spent on a bug that has been reopened five times.",
    "This is the five-day audit we run to put a number on it, and the three findings that show up in nearly every codebase we open.",
  ],
  sections: [
    {
      id: "debt-on-the-invoice",
      title: "Why Debt Shows Up on the Invoice First",
      body: [
        "Engineers experience debt as friction. Founders experience it as cost. The two conversations rarely meet, which is why debt gets deprioritised for years.",
        "Reframing helps: instead of asking what is ugly in the codebase, ask what we are paying for every week that we would not choose to pay again. That question has answers with dollar signs, and dollar signs get scheduled.",
        "The audit exists to produce that list. Not a refactor plan — a cost list, ordered by what it costs to keep and what it costs to fix.",
      ],
    },
    {
      id: "where-money-leaks",
      title: "Where the Money Actually Leaks",
      body: [
        "Across audits, the spend concentrates in a small number of places.",
        <>
          <strong className="font-bold">Idle and oversized infrastructure.</strong>{" "}
          Staging environments running production-sized instances around the
          clock. Databases provisioned for a launch spike that never came back.
          This is usually the fastest money to recover.
        </>,
        <>
          <strong className="font-bold">Manual release steps.</strong> Every
          manual step costs engineer time on every release and produces the
          incidents that cost far more. Teams underestimate this because the time
          is spread thin.
        </>,
        <>
          <strong className="font-bold">The bug that keeps coming back.</strong>{" "}
          A defect reopened repeatedly is not a bug, it is a design problem
          wearing a bug ticket. Its real cost is the cumulative support and
          re-fix time, which nobody totals up.
        </>,
        <>
          <strong className="font-bold">Unused third-party services.</strong>{" "}
          Tools bought for a project that ended, still billing monthly. We have
          yet to run an audit that did not find at least one.
        </>,
        <>
          <strong className="font-bold">The onboarding tax.</strong> If a new
          engineer needs two weeks to make a first meaningful change, that delay
          is a recurring cost on every hire.
        </>,
      ],
    },
    {
      id: "the-five-days",
      title: "The Audit, Day by Day",
      body: [
        "Five days, two engineers, no code changes. The output is a report, not a pull request.",
      ],
      table: {
        head: ["Day", "Focus", "Output"],
        rows: [
          [
            "Day 1",
            "Money and metrics",
            "Cloud bill line by line, third-party invoices, deploy frequency, incident history. The numbers before the opinions.",
          ],
          [
            "Day 2",
            "Build and release",
            "We ship a trivial change end to end and time every step. Whatever is manual gets a cost attached.",
          ],
          [
            "Day 3",
            "Codebase and data",
            "Dependency age, test coverage where it matters, and the schema. We look for the shortcuts that block future work.",
          ],
          [
            "Day 4",
            "People",
            "Conversations with the team. Engineers always know where the debt is; they are rarely asked in a way that gets a straight answer.",
          ],
          [
            "Day 5",
            "The report",
            "Findings ranked by annual cost against effort to fix, with the first sprint already scoped.",
          ],
        ],
      },
      after: [
        "The reason it fits in a week is that we are not trying to understand the whole system. We are trying to find the expensive parts.",
      ],
    },
    {
      id: "three-findings",
      title: "The Three Findings That Repeat",
      body: [
        "Different products, same three results, over and over.",
        "First: staging costs more than anyone realised, and switching it off outside working hours pays for the audit by itself.",
        "Second: the release process has one manual step that everyone has stopped noticing, and it is responsible for most of the deployment incidents.",
        "Third: there is a table in the database that should have been two tables, and every feature touching it takes twice as long to build. This is the expensive one, and it is the one teams resist fixing because it is invisible from the outside.",
      ],
    },
    {
      id: "not-debt",
      title: "What We Do Not Count as Debt",
      body: [
        "Not every shortcut is a problem, and calling everything debt makes the report useless.",
        "Code that is ugly but stable, well covered, and rarely touched is not debt. It is finished work that happens to be unattractive.",
        "An old dependency that is still maintained and still does its job is not debt either. Upgrading for its own sake is a cost with no return.",
        "Debt is specifically what makes the next change slower, riskier, or more expensive than it should be. If a shortcut does none of those things, leave it alone.",
      ],
    },
    {
      id: "into-a-sprint",
      title: "Turning the Report Into a Sprint",
      body: [
        "A report nobody acts on is an expensive document. So the last section of ours is always a scoped sprint: the two or three items with the best return, sized and sequenced.",
        "We start with the infrastructure findings because they are quick and the saving is visible on the next bill — which buys the political room to tackle the schema problem later.",
        <>
          If this sounds like your situation, the{" "}
          <Link href="/services/product-development" className={link}>
            tech-debt audit
          </Link>{" "}
          is one of the engagements we run as a fixed piece of work.
        </>,
      ],
    },
  ],
  toc: [
    {
      title: "Why Debt Is a Cost Problem",
      id: "debt-on-the-invoice",
      items: [
        { label: "Friction for engineers, cost for founders" },
        { label: "Asking a question with a dollar answer" },
      ],
    },
    {
      title: "Where the Money Leaks",
      id: "where-money-leaks",
      items: [
        { label: "Idle and oversized infrastructure" },
        { label: "Manual release steps" },
        { label: "The bug that keeps coming back" },
        { label: "Unused services and the onboarding tax" },
      ],
    },
    {
      title: "The Five-Day Audit",
      id: "the-five-days",
      items: [
        { label: "Money and metrics first" },
        { label: "Timing a real release" },
        { label: "Codebase, data, and people" },
      ],
    },
    {
      title: "The Three Findings That Repeat",
      id: "three-findings",
      items: [
        { label: "Staging that never sleeps" },
        { label: "The invisible manual step" },
        { label: "The table that should be two" },
      ],
    },
    { title: "What Is Not Debt", id: "not-debt" },
    { title: "Turning the Report Into a Sprint", id: "into-a-sprint" },
  ],
  cta: { title: "Audit Your Codebase", action: "Contact Us" },
};

const articles: Record<string, Article> = {
  "cross-platform-mobile-programming-2026": crossPlatform,
  "government-procurement-aggregator": procurementAggregator,
  "mvp-in-three-weeks": mvpInThreeWeeks,
  "tech-debt-audit": techDebtAudit,
};

export function findArticle(slug: string) {
  return articles[slug];
}
