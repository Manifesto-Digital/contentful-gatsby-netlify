import styled from 'styled-components';
import Button from '../button';

export const InlineForm = styled.form`
  display: flex;

  ${Button} {
    margin-left: ${props => props.theme.spacing.small};
  }
`;
