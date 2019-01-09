import styled from 'styled-components';
import PropTypes from 'prop-types';
import { buttonStyles } from '../styled/buttons';

export const Button = styled.button`
  ${buttonStyles};
  ${props => props.fullWidth && 'width: 100%'};
`;

export const ButtonWithIcon = styled(Button)`
  border: 5px solid green;
`;

Button.propTypes = {
  bg: PropTypes.string.isRequired,
};

// export default Button;
