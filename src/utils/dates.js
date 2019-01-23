import dayjs from 'dayjs';

// Format date as string in required format
// Formatting options: https://bit.ly/2R9uVsh
export const dateAsString = (date, format) =>
  dayjs(date)
    .format(format)
    .toString();
