const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

export const formatDate = (date: string) => {
  return dateFormatter.format(new Date(date));
};
