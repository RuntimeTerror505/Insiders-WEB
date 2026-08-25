import type { ComponentProps, ComponentType } from "react";
import Image from "next/image";
import Link from "next/link";

import { AppleIcon, GooglePlayIcon } from "@/components/icons/store";
import TechIcon from "@/components/icons/tech";
import Stars from "@/components/ui/stars";
import type { CaseStudy } from "@/data/cases";
import { cn } from "@/lib/utils";

/**
 * Бейдж стора з макета: чорна плашка 40px заввишки, сірий контур, радіус 6.
 * Ширину не фіксуємо на 120px, як у Figma: там ворд-марки набрані
 * фірмовими шрифтами сторів, а Montserrat ширший і обрізався б.
 */
function StoreBadge({
  href,
  icon: Icon,
  caption,
  name,
}: {
  href: string;
  icon: ComponentType<ComponentProps<"svg">>;
  caption: string;
  name: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="inline-flex h-10 min-w-30 items-center justify-center gap-1.5 rounded-md border border-[#a6a6a6] bg-black px-3 whitespace-nowrap text-white transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      <Icon className="size-6 shrink-0" />
      <span className="flex flex-col">
        <span className="text-[9px] leading-[9px]">{caption}</span>
        <span className="text-sm leading-[18px] font-medium tracking-[-0.3px]">{name}</span>
      </span>
    </a>
  );
}

function Rating({ score, count }: { score: number; count: string }) {
  return (
    <div className="flex items-center gap-2">
      <Stars score={score} className="gap-1" starClassName="size-6 fill-rating text-rating" />
      <div className="flex items-center gap-1 text-base leading-6 font-medium text-muted-foreground">
        <span>{score}</span>
        <span aria-hidden className="size-[5px] rounded-full bg-current" />
        <span>{count} Ratings</span>
      </div>
    </div>
  );
}

export default function CaseRow({
  caseStudy,
  reversed = false,
}: {
  caseStudy: CaseStudy;
  /** true — фото ліворуч, текст праворуч */
  reversed?: boolean;
}) {
  const { slug, name, category, description, tech, rating, stores, image } = caseStudy;

  return (
    <article className="grid items-center gap-10 lg:grid-cols-2 lg:gap-6">
      <div className={cn("flex flex-col gap-10", reversed && "lg:order-2")}>
        <div className="flex flex-col gap-4">
          {/* У макеті назва — надрядок, а великим набрана категорія */}
          <div>
            <h3 className="text-xl leading-7">
              <Link
                href={`/cases/${slug}`}
                className="rounded-md transition-colors hover:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                {name}
              </Link>
            </h3>
            <p className="text-2xl leading-8 font-semibold">{category}</p>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-lg leading-8">{description}</p>

            <ul className="flex list-none flex-wrap items-center gap-x-6 gap-y-3">
              {tech.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <TechIcon name={item} className="size-13 shrink-0" />
                  <span className="text-lg leading-8">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {stores && (
            <div className="flex flex-wrap gap-4">
              {stores.appStore && (
                <StoreBadge
                  href={stores.appStore}
                  icon={AppleIcon}
                  caption="Download on the"
                  name="App Store"
                />
              )}
              {stores.googlePlay && (
                <StoreBadge
                  href={stores.googlePlay}
                  icon={GooglePlayIcon}
                  caption="GET IT ON"
                  name="Google Play"
                />
              )}
            </div>
          )}

          {rating && <Rating score={rating.score} count={rating.count} />}
        </div>
      </div>

      <div className={cn(reversed && "lg:order-1")}>
        {image ? (
          <Image
            src={image.src}
            alt={image.alt}
            width={588}
            height={634}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="h-auto w-full"
          />
        ) : (
          // плейсхолдер, поки скриншоти застосунків не вивантажені з макета
          <div
            aria-hidden
            className="flex aspect-[588/634] items-center justify-center rounded-2xl bg-muted"
          >
            <span className="text-7xl font-semibold tracking-tight text-muted-foreground/40">
              {name.charAt(0)}
            </span>
          </div>
        )}
      </div>
    </article>
  );
}
