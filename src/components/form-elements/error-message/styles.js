import styled from 'styled-components';

export const StyledErrorMessage = styled.p`
  font-size: ${props => props.theme.fontsize.small};
  color: ${props => props.theme.palette.error};
  margin-top: ${props => (props.marginTop ? props.theme.spacing.small : null)};
`;
