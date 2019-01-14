import React from 'react';
import PropTypes from 'prop-types';
import { StyledSVG } from './styles';
import Envelope from '../../assets/svg/envelope.svg';
import Print from '../../assets/svg/printer.svg';

const icons = {
  print: Print,
  email: Envelope,
};

const Icon = ({ icon }) => {
  const chosenIcon = icons[icon] || null;
  return chosenIcon && <StyledSVG src={chosenIcon} cacheGetRequests />;
};

Icon.propTypes = {
  icon: PropTypes.string,
};

export default Icon;
