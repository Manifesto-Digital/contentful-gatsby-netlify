import React from 'react';
import PropTypes from 'prop-types';

const ChallengeEventIcons = ({ data, insideContainer }) => {
  const { headerText, theme, eventIcons } = data;

  return <></>;
};

ChallengeEventIcons.propTypes = {
  data: PropTypes.shape({
    headerText: PropTypes.string,
    theme: PropTypes.oneOf(['Grey', 'Black']),
    eventIcons: PropTypes.array,
  }),
  insideContainer: PropTypes.bool,
};

export default ChallengeEventIcons;
