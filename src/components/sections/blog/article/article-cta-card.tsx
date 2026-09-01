import Link from "next/link";

import { ArrowRightIcon } from "@/components/icons/ui";
import { Button } from "@/components/ui/button";

/**
 * Брендова картка в сайдбарі (нода 382:3033): суцільний brand-500,
 * заголовок 24/32 і кнопка на всю ширину, усе по центру.
 */
export default function ArticleCtaCard({
  title,
  action,
}: {
  title: string;
  action: { label: string; href: string };
}) {
  return (
    <div className="bg-primary flex flex-col items-center gap-6 rounded-2xl p-6 text-center text-white">
      <p className="text-2xl leading-8 font-bold">{title}</p>

      <Button
        render={<Link href={action.href} />}
        nativeButton={false}
        variant="brandSecondary"
        size="2xl"
        className="w-full"
      >
        {action.label}
        <ArrowRightIcon />
      </Button>
    </div>
  );
}
