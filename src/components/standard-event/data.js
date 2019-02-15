import { consistentString } from '../../utils/content-formatting';

export const eventTypes = {
  run: consistentString('Run'),
  cycle: consistentString('Cycle'),
  challenge: consistentString('Challenge'),
  artsAndEntertainment: consistentString('Arts & Entertainment'),
};

export const eventStatuses = {
  registerInterest: consistentString('Register Interest'),
  open: consistentString('Open'),
  soldOut: consistentString('Sold Out'),
  closed: consistentString('Closed'),
  waitingList: consistentString('Waiting List'),
};
