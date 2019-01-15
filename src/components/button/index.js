import styled from 'styled-components';
import PropTypes from 'prop-types';
import { buttonStyles } from '../styled/buttons';

const Button = styled.button`
  ${buttonStyles};
`;

Button.propTypes = {
  bg: PropTypes.string.isRequired,
};

export default Button;
