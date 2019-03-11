import dayjs from 'dayjs';

// Format date as string in required format
// Formatting options: https://bit.ly/2R9uVsh
export const dateAsString = (date, format) =>
  dayjs(date)
    .format(format)
    .toString();

export const getWeekDays = () => {
  const weekDays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  return weekDays;
};

export const dayOfTheWeek = () => {
  const daysArray = getWeekDays();
  const today = new Date();

  return daysArray[today.getDay() - 1];
};
