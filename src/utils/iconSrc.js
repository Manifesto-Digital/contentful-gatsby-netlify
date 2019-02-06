import SpeechBubble from '../assets/svg/icons/comment-light.svg';
import Envelope from '../assets/svg/icons/envelope-light.svg';
import Download from '../assets/svg/icons/download-light.svg';
import Printer from '../assets/svg/icons/print-light.svg';
import OpenBook from '../assets/svg/icons/book-open-light.svg';
import Exclamation from '../assets/svg/icons/exclamation-circle-light.svg';
import Telephone from '../assets/svg/icons/phone-light.svg';
import MapMarker from '../assets/svg/icons/map-marker-alt-light.svg';
import ChippedTimeResults from '../assets/svg/icons/challenge-event/chipped-time-results.svg';
import FinishersMedal from '../assets/svg/icons/challenge-event/finishers-medal.svg';
import FreeBagTransfer from '../assets/svg/icons/challenge-event/free-bag-transfer.svg';
import FreeRacePhotos from '../assets/svg/icons/challenge-event/free-race-photos.svg';
import GoodieBags from '../assets/svg/icons/challenge-event/goodie-bags.svg';
import PostRaceCelebration from '../assets/svg/icons/challenge-event/post-race-celebration.svg';
import SportsMassage from '../assets/svg/icons/challenge-event/sports-massage.svg';
import TechnicalRunningTop from '../assets/svg/icons/challenge-event/technical-running-top.svg';
import ClipboardChecklist from '../assets/svg/icons/clipboard-checklist-light.svg';
import FundingGoalMeter from '../assets/svg/icons/funding-goal-meter-light.svg';
import Lightbulb from '../assets/svg/icons/lightbulb-light.svg';
import MapUnfolded from '../assets/svg/icons/map-unfolded-light.svg';

import { consistentString } from './content-formatting';

const iconList = {
  'speech-bubble': SpeechBubble,
  envelope: Envelope,
  download: Download,
  printer: Printer,
  'open-book': OpenBook,
  'exclamation-mark': Exclamation,
  telephone: Telephone,
  'map-marker': MapMarker,
  'chipped-time-results': ChippedTimeResults,
  'finishers-medal': FinishersMedal,
  'free-bag-transfer': FreeBagTransfer,
  'free-race-photos': FreeRacePhotos,
  'goodie-bags': GoodieBags,
  'post-race-celebration': PostRaceCelebration,
  'sports-massage': SportsMassage,
  'technical-running-top': TechnicalRunningTop,
  'clipboard-checklist': ClipboardChecklist,
  'funding-goal-meter': FundingGoalMeter,
  lightbulb: Lightbulb,
  'map-unfolded': MapUnfolded,
  'no-icon': null,
  default: null,
};

// returns the src of an svg icon from the above icon list
const iconSrc = icon => {
  const iconKey = consistentString(icon);

  if (iconList[iconKey] === undefined) {
    throw new Error(
      'No matching icon was found. Is it set as an option in the CMS? Has it been imported and included in the object above?'
    );
  }

  const chosenIcon = iconList[iconKey] || null;

  if (!chosenIcon) return null;

  return chosenIcon;
};

export default iconSrc;
