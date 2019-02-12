import React from 'react';
import PropTypes from 'prop-types';
import Telephone from '../../assets/svg/icons/phone-light.svg';
import MapMarker from '../../assets/svg/icons/map-marker-alt-light.svg';
import SpeechBubble from '../../assets/svg/icons/comment-light.svg';

import { CardSVG } from './styles';

const icons = {
  'map-pin': MapMarker,
  phone: Telephone,
  'speech-bubble': SpeechBubble,
  'no-icon': null,
  default: null,
};

const Icon = ({ icon }) => {
  if (!icons[icon]) {
    throw new Error(
      'No matching icon was found. Is it set as an option in the CMS? Has it been imported and included in the object above?'
    );
  }

  const chosenIcon = icons[icon] || null;

  if (!chosenIcon) return null;
  return <CardSVG src={chosenIcon} cacheGetRequests />;
};

Icon.propTypes = {
  icon: PropTypes.string,
};

export default Icon;
