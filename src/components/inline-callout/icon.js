import React from 'react';
import PropTypes from 'prop-types';
import SpeechBubble from '../../assets/svg/icons/comment-light.svg';
import Envelope from '../../assets/svg/icons/envelope-light.svg';
import Download from '../../assets/svg/icons/download-light.svg';
import Printer from '../../assets/svg/icons/print-light.svg';
import OpenBook from '../../assets/svg/icons/book-open-light.svg';
import Exclamation from '../../assets/svg/icons/exclamation-circle-light.svg';
import Telephone from '../../assets/svg/icons/phone-light.svg';
import MapMarker from '../../assets/svg/icons/map-marker-alt-light.svg';

import { BannerSVG } from './styles';

const icons = {
  'speech-bubble': SpeechBubble,
  envelope: Envelope,
  download: Download,
  printer: Printer,
  'open-book': OpenBook,
  'exclamation-mark': Exclamation,
  telephone: Telephone,
  'map-marker': MapMarker,
  default: null,
};

const Icon = ({ icon }) => {
  const chosenIcon = icons[icon] || null;
  return chosenIcon && <BannerSVG src={chosenIcon} />;
};

Icon.propTypes = {
  icon: PropTypes.string,
};

export default Icon;
