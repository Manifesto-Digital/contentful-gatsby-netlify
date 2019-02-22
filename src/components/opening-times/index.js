import React from 'react';
import PropTypes from 'prop-types';
import { consistentString } from '../../utils/content-formatting';
import { dayOfTheWeek } from '../../utils/dates';
import { TimeList, Time, Day, TimeVal } from './styles';

const OpeningTimes = ({ data }) => {
  const {
    mondayOpeningTimes,
    tuesdayOpeningTimes,
    wednesdayOpeningTimes,
    thursdayOpeningTimes,
    fridayOpeningTimes,
    saturdayOpeningTimes,
    sundayOpeningTimes,
  } = data;

  return (
    <TimeList>
      <Time
        closed={consistentString(mondayOpeningTimes) === 'closed'}
        today={dayOfTheWeek() === 'Monday'}
      >
        <Day>Monday:</Day> <TimeVal>{mondayOpeningTimes}</TimeVal>
      </Time>
      <Time
        closed={consistentString(tuesdayOpeningTimes) === 'closed'}
        today={dayOfTheWeek() === 'Tuesday'}
      >
        <Day>Tuesday:</Day> <TimeVal>{tuesdayOpeningTimes}</TimeVal>
      </Time>
      <Time
        closed={consistentString(wednesdayOpeningTimes) === 'closed'}
        today={dayOfTheWeek() === 'Wednesday'}
      >
        <Day>Wednesday:</Day> <TimeVal>{wednesdayOpeningTimes}</TimeVal>
      </Time>
      <Time
        closed={consistentString(thursdayOpeningTimes) === 'closed'}
        today={dayOfTheWeek() === 'Thursday'}
      >
        <Day>Thursday:</Day> <TimeVal>{thursdayOpeningTimes}</TimeVal>
      </Time>
      <Time
        closed={consistentString(fridayOpeningTimes) === 'closed'}
        today={dayOfTheWeek() === 'Friday'}
      >
        <Day>Friday:</Day> <TimeVal>{fridayOpeningTimes}</TimeVal>
      </Time>
      <Time
        closed={consistentString(saturdayOpeningTimes) === 'closed'}
        today={dayOfTheWeek() === 'Saturday'}
      >
        <Day>Saturday:</Day> <TimeVal>{saturdayOpeningTimes}</TimeVal>
      </Time>
      <Time
        closed={consistentString(sundayOpeningTimes) === 'closed'}
        today={dayOfTheWeek() === 'Sunday'}
      >
        <Day>Sunday:</Day> <TimeVal>{sundayOpeningTimes}</TimeVal>
      </Time>
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
