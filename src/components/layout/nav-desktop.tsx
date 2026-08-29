"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavigationMenu } from "@base-ui/react/navigation-menu";

import { ChevronDownIcon } from "@/components/icons/ui";
import { Button } from "@/components/ui/button";
import { headerCta, isActivePath, mainNav } from "@/lib/navigation";
import { cn } from "@/lib/utils";

// Макет: 16px/24px Montserrat Regular, чорний, 4px між лейблом і шевроном.
const triggerClassName =
  "group flex cursor-pointer select-none items-center gap-1 bg-transparent text-base leading-6 font-normal whitespace-nowrap no-underline transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring";

function NavLabel({ children }: { children: string }) {
  return (
    <span className="relative inline-block">
      {children}
      {/*
       * Line 1 з макета (нода 1:7296) — 1px під лейблом, у спокої згорнутий
       * у нуль. Колір бере bg-current, тому разом із текстом стає брендовим.
       * У стані Active лінії в макеті немає — там працює лише колір.
       */}
      <span
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:scale-x-100"
      />
    </span>
  );
}

export default function NavDesktop() {
  const pathname = usePathname();

  return (
    <div className="hidden flex-1 items-center justify-end gap-6 lg:flex">
      <NavigationMenu.Root>
        <NavigationMenu.List className="relative flex items-center gap-6">
          {mainNav.map((item) => {
            const active = isActivePath(pathname, item.href);

            if (!item.children) {
              return (
                <NavigationMenu.Item key={item.href}>
                  <NavigationMenu.Link
                    render={<Link href={item.href} />}
                    className={cn(
                      triggerClassName,
                      active ? "text-primary" : "text-foreground"
                    )}
                  >
                    <NavLabel>{item.label}</NavLabel>
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
              );
            }

            return (
              <NavigationMenu.Item key={item.href}>
                <NavigationMenu.Trigger
                  className={cn(
                    triggerClassName,
                    "data-popup-open:text-primary",
                    active ? "text-primary" : "text-foreground"
                  )}
                >
                  <NavLabel>{item.label}</NavLabel>
                  <NavigationMenu.Icon className="flex shrink-0 items-center transition-transform duration-200 ease-out group-data-popup-open:rotate-180">
                    <ChevronDownIcon className="size-6" />
                  </NavigationMenu.Icon>
                </NavigationMenu.Trigger>

                <NavigationMenu.Content
                  className={cn(
                    "w-[18rem] p-2",
                    "transition-[opacity,translate] duration-[var(--duration)] ease-[var(--easing)]",
                    "data-starting-style:opacity-0 data-ending-style:opacity-0",
                    "data-starting-style:data-[activation-direction=left]:translate-x-[-30%]",
                    "data-starting-style:data-[activation-direction=right]:translate-x-[30%]",
                    "data-ending-style:data-[activation-direction=left]:translate-x-[30%]",
                    "data-ending-style:data-[activation-direction=right]:translate-x-[-30%]"
                  )}
                >
                  <ul className="flex list-none flex-col gap-0.5">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <NavigationMenu.Link
                          render={<Link href={child.href} />}
                          className={cn(
                            "block rounded-md px-3 py-2 text-base leading-6 no-underline transition-colors hover:bg-brand-50 hover:text-primary focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-ring",
                            isActivePath(pathname, child.href)
                              ? "bg-brand-50 text-primary"
                              : "text-foreground"
                          )}
                        >
                          {child.label}
                        </NavigationMenu.Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenu.Content>
              </NavigationMenu.Item>
            );
          })}
        </NavigationMenu.List>

        <NavigationMenu.Portal>
          <NavigationMenu.Positioner
            sideOffset={16}
            collisionPadding={{ top: 5, bottom: 5, left: 16, right: 16 }}
            collisionAvoidance={{ side: "none" }}
            className={cn(
              "z-50 h-[var(--positioner-height)] w-[var(--positioner-width)] max-w-[var(--available-width)]",
              "transition-[top,left,right,bottom] duration-[var(--duration)] ease-[var(--easing)] data-instant:transition-none",
              // невидимий місток, щоб курсор не «губив» попап дорогою від тригера
              "before:absolute before:inset-x-0 before:top-[-16px] before:h-4 before:content-['']"
            )}
            style={
              {
                "--duration": "0.3s",
                "--easing": "cubic-bezier(0.22, 1, 0.36, 1)",
              } as CSSProperties
            }
          >
            <NavigationMenu.Popup
              className={cn(
                "relative h-[var(--popup-height)] w-[var(--popup-width)] origin-[var(--transform-origin)]",
                "bg-background border-brand-100 shadow-popover rounded-xl border outline-none",
                "transition-[opacity,transform,width,height] duration-[var(--duration)] ease-[var(--easing)]",
                "data-starting-style:scale-95 data-starting-style:opacity-0",
                "data-ending-style:scale-95 data-ending-style:opacity-0 data-ending-style:duration-150"
              )}
            >
              <NavigationMenu.Viewport className="relative h-full w-full overflow-hidden" />
            </NavigationMenu.Popup>
          </NavigationMenu.Positioner>
        </NavigationMenu.Portal>
      </NavigationMenu.Root>

      <Button
        render={<Link href={headerCta.href} />}
        nativeButton={false}
        variant="brandOutline"
        size="xl"
      >
        {headerCta.label}
      </Button>
    </div>
  );
}
