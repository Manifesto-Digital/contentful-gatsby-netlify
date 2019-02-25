import dayjs from 'dayjs';

// Format date as string in required format
// Formatting options: https://bit.ly/2R9uVsh
export const dateAsString = (date, format) =>
  dayjs(date)
    .format(format)
    .toString();

export const getWeekDays = () => {
  // Base date is a Monday, this ensures we get the day lsit in order
  const baseDate = new Date(Date.UTC(2019, 0, 7));
  const weekDays = [];
  for (let i = 0; i < 7; i += 1) {
    weekDays.push(baseDate.toLocaleDateString('en-GB', { weekday: 'long' }));
    baseDate.setDate(baseDate.getDate() + 1);
  }
  return weekDays;
};

export const dayOfTheWeek = () => {
  const daysArray = getWeekDays();
  const today = new Date();

  return daysArray[today.getDay() - 1];
};
