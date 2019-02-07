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
import ClipboardChecklist from '../../assets/svg/icons/clipboard-checklist-light.svg';
import FundingGoalMeter from '../../assets/svg/icons/funding-goal-meter-light.svg';
import Lightbulb from '../../assets/svg/icons/lightbulb-light.svg';
import MapUnfolded from '../../assets/svg/icons/map-unfolded-light.svg';

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
  'clipboard-checklist': ClipboardChecklist,
  'funding-goal-meter': FundingGoalMeter,
  lightbulb: Lightbulb,
  'map-unfolded': MapUnfolded,
  'no-icon': null,
  default: null,
};

const Icon = ({ icon }) => {
  if (icons[icon] === undefined) {
    throw new Error(
      'No matching icon was found. Is it set as an option in the CMS? Has it been imported and included in the object above?'
    );
  }

  const chosenIcon = icons[icon] || null;

  if (!chosenIcon) return null;
  return <BannerSVG src={chosenIcon} />;
};

Icon.propTypes = {
  icon: PropTypes.string,
};

export default Icon;
