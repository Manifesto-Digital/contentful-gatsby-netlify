import dayjs from 'dayjs';

// Format date as string in required format
// Formatting options: https://bit.ly/2R9uVsh
export const dateAsString = (date, format) =>
  dayjs(date)
    .format(format)
    .toString();

export const dayOfTheWeek = () => {
  const daysArray = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  const today = new Date();

  return daysArray[today.getDay() - 1];
};
