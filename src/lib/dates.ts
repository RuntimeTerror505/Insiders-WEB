const postDateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export function formatPostDate(date: string) {
  return postDateFormatter.format(new Date(date));
}
