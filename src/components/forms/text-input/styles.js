import styled, { css } from 'styled-components';
import successIcon from './success.png';
import errorIcon from './error.png';

const getStyles = ({ touched, error, theme }) => {
  if (!touched) {
    return css`
      border: 1px solid ${theme.palette.grey15};
      background-color: white;
    `;
  }

  if (error) {
    return css`
      border: 1px solid ${theme.palette.error};
      background: no-repeat 97% url(${errorIcon});
      background-color: ${theme.palette.errorLight};
    `;
  }

  return css`
      border 1px solid ${theme.palette.success};
      background: no-repeat 97% url(${successIcon});
      background-color: ${theme.palette.successLight};
    `;
};

export const StyledInput = styled.input`
  ${getStyles};
  display: block;
  background-size: 15px 15px;
  outline: none;
  width: 100%;
  margin-bottom: ${props => props.theme.spacing.standard};
  padding: ${props => props.theme.spacing.small};
`;
