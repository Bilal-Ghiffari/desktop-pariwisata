import dayjs from "dayjs";

export const dateFormat = (
  date: Date | string,
  format = "DD MMM YYYY HH:mm"
) => {
  if (!date) {
    return "date not found";
  }

  const dateFormat = dayjs(date).format(format);
  return dateFormat;
};
