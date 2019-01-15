import React from 'react';
import PropTypes from 'prop-types';

import { DefaultButton, IconHolder } from './styles';

const Button = ({ bg, icon, iconColour, fullWidth, children }) => (
  <DefaultButton bg={bg} fullWidth={fullWidth}>
    {icon && <IconHolder src={icon} iconColour={iconColour} />}
    {children}
  </DefaultButton>
);

Button.propTypes = {
  bg: PropTypes.string.isRequired,
  icon: PropTypes.string,
  iconColour: PropTypes.string,
  fullWidth: PropTypes.bool,
  children: PropTypes.node,
};

export default Button;
