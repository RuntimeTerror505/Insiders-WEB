import Link from "next/link";

import Container from "@/components/layout/container";
import Logo from "@/components/layout/logo";
import { emailHref, phoneHref, siteConfig } from "@/lib/site";

const contactClassName =
  "focus-visible:outline-ring rounded-md text-base leading-6 font-bold no-underline transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4";

export default function Footer() {
  const { contacts, socials, legal, name } = siteConfig;

  return (
    // Фрейм із макета: 1440×253, gap 32, падінг лише знизу 40
    <footer className="pb-10">
      <Container>
        <div className="mx-auto flex max-w-[1200px] flex-col gap-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <Logo imageClassName="lg:h-16" />

            <ul className="flex list-none items-center gap-6">
              {socials.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={label}
                    className="hover:bg-primary focus-visible:outline-ring inline-flex size-12 items-center justify-center rounded-lg bg-black text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-4"
                  >
                    <Icon className="size-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Три рівні колонки: так email стає рівно по центру сторінки */}
          <div className="grid gap-4 sm:grid-cols-3">
            <address className="text-base leading-6 font-bold not-italic">
              {contacts.address}
            </address>
            <a href={emailHref} className={`${contactClassName} sm:text-center`}>
              {contacts.email}
            </a>
            <a href={phoneHref} className={`${contactClassName} sm:text-right`}>
              {contacts.phone}
            </a>
          </div>
        </div>
      </Container>

      {/* Лінія на всю ширину кадру, а не по контент-сітці */}
      <div className="mt-8 border-t">
        <Container>
          <div className="text-muted-foreground flex flex-col items-center gap-3 text-base leading-6">
            <p>
              © {new Date().getFullYear()} {name}. All rights reserved.
            </p>
            {legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-foreground focus-visible:outline-ring rounded-md no-underline transition-colors focus-visible:outline-2 focus-visible:outline-offset-4"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
