import styled from 'styled-components';
import Button from '../button';

export const StyledForm = styled.form`
  ${({ inline }) =>
    inline &&
    `
    display: flex;

    ${Button} {
      margin-left: ${props => props.theme.spacing.small};
    }
  `}
`;
