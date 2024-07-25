import dayjs from "dayjs";

export const dateFormat = (
  date: Date | string,
  format = "ddd DD MMM YYYY HH:mm"
) => {
  if (!date) {
    return "date not found";
  }

  const dateFormat = dayjs(date).format(format);
  return dateFormat;
};

export const objectToParams = (obj: { [key: string]: unknown }) => {
  const queryParams = Object.keys(obj)
    .map((key) => {
      if (obj[key] !== null) {
        return `${key}=${obj[key]}`;
      }
      return "";
    })
    .filter((val) => val !== "")
    .join("&");

  return queryParams;
};

function debounce(func: Function, delay: number) {
  let timer: ReturnType<typeof setTimeout>;
  return function (...args: any[]) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
}
