import { formatPostDate } from "@/lib/dates";

/**
 * Рядок «дата · час читання» з макета (нода 354:1787). Однаковий у великому
 * пості і в картках сітки, розділювач — вертикальна риска 1×24.
 */
export default function PostMeta({
  date,
  readingTime,
}: {
  date: string;
  readingTime: string;
}) {
  return (
    <p className="text-meta flex items-center gap-4 text-base leading-6">
      <time dateTime={date}>{formatPostDate(date)}</time>
      <span aria-hidden className="bg-border h-6 w-px shrink-0" />
      {readingTime}
    </p>
  );
}
