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
  className,
  disabled,
}) => (
  <DefaultButton
    bg={bg}
    className={className}
    fullWidth={fullWidth}
    type={type}
    disabled={disabled}
  >
    {icon && <IconHolder src={icon} iconColour={iconColour} cacheGetRequests />}
    {children}
  </DefaultButton>
);

Button.propTypes = {
  bg: PropTypes.string.isRequired,
  icon: PropTypes.string,
  iconColour: PropTypes.string,
  type: PropTypes.string,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Button;
