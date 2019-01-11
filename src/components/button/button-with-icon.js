import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';

import Button from './index';

export const IconHolder = styled(SVG)`
  fill: ${props => props.theme.palette.white};
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  vertical-align: top;
  margin-top: -2px;
`;

const ButtonWithIcon = props => {
  const { icon, children } = props;
  return (
    <Button {...props}>
      <IconHolder src={icon} alt="" />
      {children}
    </Button>
  );
};

ButtonWithIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default ButtonWithIcon;
