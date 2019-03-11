import styled, { css } from 'styled-components';
import { buttonReset } from '../../styled/buttons';
import { breakpoint } from '../../theme/breakpoint';

export const Wrapper = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.large};
  ${({ borderTop }) =>
    borderTop &&
    css`
      margin-top: ${({ theme }) => theme.spacing.large};
      border-top: 1px solid ${({ theme }) => theme.palette.grey10};
      padding-top: ${({ theme }) => theme.spacing.standard};
    `};
`;

export const List = styled.ul`
  padding: 0;
  display: grid;

  ${breakpoint.desktop`
    grid-template-columns: ${({ columns }) =>
      columns && `repeat(${columns}, 1fr)`};
    grid-gap: ${({ theme }) => theme.spacing.standard};
  `};
`;

export const LoadMore = styled.div`
  text-align: center;
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
`;

export const LoadMoreButton = styled.button`
  ${buttonReset}
  color: ${({ theme }) => theme.palette.primary};
  padding: ${({ theme }) => theme.spacing.small};
  
  svg { 
    width: 35px;
    height: 35px;
  }
`;
