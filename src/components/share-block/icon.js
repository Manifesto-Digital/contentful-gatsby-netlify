import React from 'react';
import PropTypes from 'prop-types';
import { StyledSVG } from './styles';
import Email from '../../assets/svg/email.svg';
import Print from '../../assets/svg/printer.svg';
import WhatsApp from '../../assets/svg/whatsapp.svg';
import Facebook from '../../assets/svg/facebook.svg';
import Twitter from '../../assets/svg/twitter.svg';

const icons = {
  print: Print,
  email: Email,
  whatsapp: WhatsApp,
  twitter: Twitter,
  facebook: Facebook,
};

const Icon = ({ icon }) => {
  const chosenIcon = icons[icon] || null;
  return chosenIcon && <StyledSVG src={chosenIcon} cacheGetRequests />;
};

Icon.propTypes = {
  icon: PropTypes.string,
};

export default Icon;
