import styled from 'styled-components';

export const StyledErrorMessage = styled.p`
  font-size: ${({ theme }) => theme.fontsize.small};
  color: ${({ theme }) => theme.palette.error};
  margin-top: ${({ marginTop, theme }) =>
    marginTop ? theme.spacing.small : null};
`;
