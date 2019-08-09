import React from 'react';
import PropTypes from 'prop-types';
import { consistentString } from '../../utils/content-formatting';
import { dayOfTheWeek } from '../../utils/dates';
import { TimeList, Time, Day, TimeVal } from './styles';

const OpeningTimes = ({ data }) => {
  if (!data) return null;

  const {
    mondayOpeningTimes,
    tuesdayOpeningTimes,
    wednesdayOpeningTimes,
    thursdayOpeningTimes,
    fridayOpeningTimes,
    saturdayOpeningTimes,
    sundayOpeningTimes,
  } = data;

  const days = {
    Monday: mondayOpeningTimes,
    Tuesday: tuesdayOpeningTimes,
    Wednesday: wednesdayOpeningTimes,
    Thursday: thursdayOpeningTimes,
    Friday: fridayOpeningTimes,
    Saturday: saturdayOpeningTimes,
    Sunday: sundayOpeningTimes,
  };

  return (
    <TimeList>
      {Object.keys(days).map((day, key) => (
        <Time
          closed={consistentString(days[day]) === 'closed'}
          today={dayOfTheWeek() === day}
          key={key}
        >
          <Day>{day}:</Day> <TimeVal>{days[day]}</TimeVal>
        </Time>
      ))}
    </TimeList>
  );
};

OpeningTimes.propTypes = {
  data: PropTypes.shape({
    mondayOpeningTimes: PropTypes.string.isRequired,
    tuesdayOpeningTimes: PropTypes.string.isRequired,
    wednesdayOpeningTimes: PropTypes.string.isRequired,
    thursdayOpeningTimes: PropTypes.string.isRequired,
    fridayOpeningTimes: PropTypes.string.isRequired,
    saturdayOpeningTimes: PropTypes.string.isRequired,
    sundayOpeningTimes: PropTypes.string.isRequired,
  }),
};

export default OpeningTimes;
