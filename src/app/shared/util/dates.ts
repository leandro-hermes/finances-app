import dayjs from "dayjs";

const now = () => dayjs();

const parseForDatePicker = (date: string | Date | null | undefined): dayjs.Dayjs => dayjs(date);

const parseFromDatePicker = (date: dayjs.Dayjs | null | undefined): Date | null => date?.toDate() ?? null;

export {
  now,
  parseForDatePicker,
  parseFromDatePicker,
};
