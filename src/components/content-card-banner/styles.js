import styled, { css } from 'styled-components';
import { breakpoint } from '../theme/breakpoint';
import { Card } from '../content-card/styles';

export const BannerBackground = styled.section`
  background: ${props =>
    (props.bannerColour === 'white' && props.theme.palette.white) ||
    (props.bannerColour === 'grey' && props.theme.palette.grey10)};
  };
`;

export const HeaderText = styled.h2`
  padding-top: ${props => props.theme.spacing.standard};
`;

export const CardRow = styled.div`
  display: flex;
  flex-flow: column nowrap;
  ${breakpoint.tablet`
    flex-flow: row wrap;
  `};

  ${Card} {
    ${breakpoint.tablet`
      ${({ items }) =>
        items === 2 &&
        css`
          margin-right: ${props => props.theme.spacing.standard};
          &:last-child {
            margin-right: 0;
          }
        `}

      ${({ items }) =>
        items === 3 &&
        css`
          margin-right: ${props => props.theme.spacing.standard};
          &:last-child {
            margin-right: 0;
          }
        `}

      ${({ items }) =>
        items === 4 &&
        css`
          flex: 0 auto;
          width: calc(50% - 10px);

          &:first-child,
          &:nth-child(3) {
            margin-right: ${props => props.theme.spacing.standard};
          }
        `}
    `};

    // Reset and standardise spacing at desktop
    ${breakpoint.desktop`
      width: auto;
      flex: 1;
      margin-right: ${props => props.theme.spacing.standard};
      margin-bottom: ${props => props.theme.spacing.standard};

      &:last-child {
        margin-right: 0;
      }
    `};
  }
`;
