import React from 'react';
import PropTypes from 'prop-types';

import { DefaultButton, IconHolder } from './styles';

const Button = ({
  bg,
  icon,
  iconColour,
  fullWidth,
  type = 'button',
  children,
}) => (
  <DefaultButton bg={bg} fullWidth={fullWidth} type={type}>
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
