import styled from 'styled-components';

export const SectionTag = styled.div`
  display: inline-block;
  position: absolute;
  top: -25px;
  background-color: ${({ theme }) => theme.palette.primary};
  color: ${({ theme }) => theme.palette.white};
  padding: ${({ theme }) => theme.spacing.small};
  left: ${({ theme, leftMargin }) => leftMargin && theme.spacing.standard};
`;
