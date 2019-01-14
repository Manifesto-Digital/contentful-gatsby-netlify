import React from 'react';
import PropTypes from 'prop-types';

import { DefaultButton, IconHolder } from './styles';

const Button = ({ bg, icon, iconColour, children }) => (
  <DefaultButton bg={bg}>
    {icon && <IconHolder src={icon} iconColour={iconColour} />}
    {children}
  </DefaultButton>
);

Button.propTypes = {
  bg: PropTypes.string.isRequired,
  icon: PropTypes.string,
  iconColour: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
