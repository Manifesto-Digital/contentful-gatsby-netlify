import React from 'react';
import PropTypes from 'prop-types';

import { StyledSVG } from './styles';
import Email from '../../assets/svg/email.svg';
import WhatsApp from '../../assets/svg/whatsapp.svg';
import Facebook from '../../assets/svg/facebook.svg';
import Twitter from '../../assets/svg/twitter.svg';

const icons = {
  email: Email,
  whatsapp: WhatsApp,
  twitter: Twitter,
  facebook: Facebook,
};

const Icon = ({ icon }) => {
  console.log(icon);
  const chosenIcon = icons[icon] || null;
  return chosenIcon && <StyledSVG src={chosenIcon} cacheGetRequests />;
};

Icon.propTypes = {
  icon: PropTypes.string,
};

export default Icon;
