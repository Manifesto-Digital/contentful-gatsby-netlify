import styled, { css } from 'styled-components';
import { breakpoint } from '../theme/breakpoint';

export const Container = styled.div`
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0
    ${({ padding, theme }) => (padding === false ? 0 : theme.spacing.standard)};

  ${({ noMobilePadding, theme }) =>
    noMobilePadding &&
    css`
      padding: 0;

      ${breakpoint.tablet`
        padding: 0 ${theme.spacing.standard};
    `};
    `}
`;

export const TwoThirds = styled.div`
  max-width: 100%;
  width: 100%;
  margin-left: ${({ right }) => right && 'auto'};

  ${breakpoint.desktop`
    max-width: 66%;
  `};
`;

export const ContentWithSideBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${breakpoint.desktop`
    flex-direction: row;
  `};
`;

export const SideBar = styled.div`
  max-width: 100%;
  word-break: break-word;
  display: ${({ desktop }) => desktop && 'none'};

  ${breakpoint.desktop`
    display: block;
    max-width: 32%;
    width: 100%;
    margin-top: 0;
    padding-left: ${({ left, theme }) => !left && theme.spacing.xl};
    padding-right: ${({ left, theme }) => left && theme.spacing.xl};
  `};
`;

export const FlexBetweenContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap-reverse;
`;

export const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.medium} 0;
  background-color: ${({ offWhite, theme }) =>
    offWhite ? theme.palette.offWhite : theme.palette.white};
`;
