import React from 'react';
import PropTypes from 'prop-types';
import { consistentString } from '../../utils/content-formatting';
import { dayOfTheWeek } from '../../utils/dates';

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
    <ul>
      <li
        closed={consistentString(mondayOpeningTimes) === 'closed'}
        today={dayOfTheWeek() === 'Monday'}
      >
        <div>Monday:</div> <div>{mondayOpeningTimes}</div>
      </li>
      <li
        closed={consistentString(tuesdayOpeningTimes) === 'closed'}
        today={dayOfTheWeek() === 'Tuesday'}
      >
        <div>Tuesday:</div> <div>{tuesdayOpeningTimes}</div>
      </li>
      <li
        closed={consistentString(wednesdayOpeningTimes) === 'closed'}
        today={dayOfTheWeek() === 'Wednesday'}
      >
        <div>Wednesday:</div> <div>{wednesdayOpeningTimes}</div>
      </li>
      <li
        closed={consistentString(thursdayOpeningTimes) === 'closed'}
        today={dayOfTheWeek() === 'Thursday'}
      >
        <div>Thursday:</div> <div>{thursdayOpeningTimes}</div>
      </li>
      <li
        closed={consistentString(fridayOpeningTimes) === 'closed'}
        today={dayOfTheWeek() === 'Friday'}
      >
        <div>Friday:</div> <div>{fridayOpeningTimes}</div>
      </li>
      <li
        closed={consistentString(saturdayOpeningTimes) === 'closed'}
        today={dayOfTheWeek() === 'Saturday'}
      >
        <div>Saturday:</div> <div>{saturdayOpeningTimes}</div>
      </li>
      <li
        closed={consistentString(sundayOpeningTimes) === 'closed'}
        today={dayOfTheWeek() === 'Sunday'}
      >
        <div>Sunday:</div> <div>{sundayOpeningTimes}</div>
      </li>
    </ul>
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
