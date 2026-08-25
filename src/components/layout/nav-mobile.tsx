"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Accordion } from "@base-ui/react/accordion";
import { Drawer } from "@base-ui/react/drawer";
import { Menu, X } from "lucide-react";

import { ChevronDownIcon } from "@/components/icons/ui";
import Logo from "@/components/layout/logo";
import { buttonVariants } from "@/components/ui/button";
import { headerCta, isActivePath, mainNav } from "@/lib/navigation";
import { cn } from "@/lib/utils";

const rowClassName =
  "flex w-full items-center justify-between gap-4 rounded-md px-3 py-2.5 text-left text-base leading-6 no-underline transition-colors hover:bg-brand-50 hover:text-primary focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-ring";

export default function NavMobile() {
  const pathname = usePathname();

  return (
    <Drawer.Root swipeDirection="right">
      <Drawer.Trigger
        aria-label="Відкрити меню"
        className="text-foreground hover:bg-brand-50 hover:text-primary focus-visible:outline-ring inline-flex size-11 items-center justify-center rounded-lg transition-colors focus-visible:outline-2 focus-visible:-outline-offset-1 lg:hidden"
      >
        <Menu className="size-6" />
      </Drawer.Trigger>

      <Drawer.Portal>
        <Drawer.Backdrop
          className={cn(
            "fixed inset-0 z-50 min-h-dvh bg-brand-950/40 backdrop-blur-[2px]",
            "opacity-[calc(1-var(--drawer-swipe-progress))] transition-opacity duration-[450ms] ease-[cubic-bezier(0.32,0.72,0,1)]",
            "data-swiping:duration-0 data-starting-style:opacity-0 data-ending-style:opacity-0"
          )}
        />
        <Drawer.Viewport className="fixed inset-0 z-50 flex items-stretch justify-end">
          <Drawer.Popup
            className={cn(
              "bg-background flex h-full w-[min(20rem,calc(100vw-3rem))] flex-col outline-none",
              "[transform:translateX(var(--drawer-swipe-movement-x))] transition-transform duration-[450ms] ease-[cubic-bezier(0.32,0.72,0,1)]",
              "data-swiping:select-none",
              "data-starting-style:[transform:translateX(100%)]",
              "data-ending-style:[transform:translateX(100%)] data-ending-style:duration-[calc(var(--drawer-swipe-strength)*400ms)]"
            )}
          >
            <Drawer.Title className="sr-only">Навігація</Drawer.Title>

            <div className="flex h-20 shrink-0 items-center justify-between px-4 py-4">
              <Drawer.Close nativeButton={false} render={<Logo />} />
              <Drawer.Close
                aria-label="Закрити меню"
                className="text-foreground hover:bg-brand-50 hover:text-primary focus-visible:outline-ring inline-flex size-11 items-center justify-center rounded-lg transition-colors focus-visible:outline-2 focus-visible:-outline-offset-1"
              >
                <X className="size-6" />
              </Drawer.Close>
            </div>

            <Drawer.Content className="flex-1 overflow-y-auto overscroll-contain p-2">
              <Accordion.Root className="flex flex-col">
                {mainNav.map((item) => {
                  const active = isActivePath(pathname, item.href);

                  if (!item.children) {
                    return (
                      <Drawer.Close
                        key={item.href}
                        nativeButton={false}
                        render={<Link href={item.href} />}
                        className={cn(
                          rowClassName,
                          active ? "text-primary" : "text-foreground"
                        )}
                      >
                        {item.label}
                      </Drawer.Close>
                    );
                  }

                  return (
                    <Accordion.Item key={item.href} className="flex flex-col">
                      <Accordion.Header>
                        <Accordion.Trigger
                          className={cn(
                            "group",
                            rowClassName,
                            active ? "text-primary" : "text-foreground"
                          )}
                        >
                          {item.label}
                          <ChevronDownIcon className="size-6 shrink-0 transition-transform duration-200 ease-out group-data-panel-open:rotate-180" />
                        </Accordion.Trigger>
                      </Accordion.Header>

                      <Accordion.Panel className="h-[var(--accordion-panel-height)] overflow-hidden transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0">
                        <ul className="border-brand-100 ml-3 flex list-none flex-col border-l pb-1 pl-3">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Drawer.Close
                                nativeButton={false}
                                render={<Link href={child.href} />}
                                className={cn(
                                  "hover:bg-brand-50 hover:text-primary focus-visible:outline-ring block rounded-md px-3 py-2 text-base leading-6 no-underline transition-colors focus-visible:outline-2 focus-visible:-outline-offset-1",
                                  isActivePath(pathname, child.href)
                                    ? "text-primary"
                                    : "text-foreground"
                                )}
                              >
                                {child.label}
                              </Drawer.Close>
                            </li>
                          ))}
                        </ul>
                      </Accordion.Panel>
                    </Accordion.Item>
                  );
                })}
              </Accordion.Root>
            </Drawer.Content>

            <div className="shrink-0 p-4">
              <Drawer.Close
                nativeButton={false}
                render={<Link href={headerCta.href} />}
                className={cn(
                  buttonVariants({ variant: "brandOutline", size: "xl" }),
                  "w-full"
                )}
              >
                {headerCta.label}
              </Drawer.Close>
            </div>
          </Drawer.Popup>
        </Drawer.Viewport>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
