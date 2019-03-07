import styled, { css } from 'styled-components';
import { breakpoint } from '../theme/breakpoint';
import { Card, Wrapper, SummaryText, CardImage } from '../content-card/styles';

export const CardRow = styled.div`
  display: flex;
  flex-flow: column nowrap;
  ${breakpoint.tablet`
    flex-flow: row wrap;
    justify-content: space-between;
  `};

  ${Card} {
    ${breakpoint.tablet`
      ${({ items }) =>
        items &&
        css`
          flex: 0 1 calc(${Math.floor(100 / items)}% - 12px);
          width: calc(${Math.floor(100 / items)}% - 12px);
        `}
    `};
  }
`;

export const BannerBackground = styled.section`
  margin-bottom: ${({ theme, sidebar }) =>
    sidebar ? theme.spacing.standard : theme.spacing.large};
  background: ${({ bannerColour, theme }) =>
    (bannerColour === 'white' && theme.palette.white) ||
    (bannerColour === 'grey' && theme.palette.grey10)};

  padding: ${({ bannerColour, theme }) =>
    bannerColour === 'grey' ? theme.spacing.medium : '0'}
    0;

    ${Card} {
      /* vertical */
      ${({ bannerFlow }) =>
        bannerFlow === 'vertical' &&
        css`
          flex: 1 1 100%;
          width: 100%;
          max-width: 600px;
        `}

      /* grid */
      ${({ bannerFlow }) =>
        bannerFlow === 'grid' &&
        css`
          flex: 0 1 100%;
          width: 100%;

          ${Wrapper} {
            position: absolute;
            bottom: 20px;
            left: 20px;
            margin-right: ${({ theme }) => theme.spacing.standard};
            background: ${({ theme }) => theme.palette.overlayLight};
          }

          ${CardImage} {
            border-radius: 0;
          }

          ${SummaryText} {
            padding-right: 35px;

            &::before {
              content: '';
              position: absolute;
              bottom: 2px;
              right: 2px;
              width: 25px;
              height: 25px;
              background: ${({ theme }) => theme.palette.grey25};
            }
          }

          ${breakpoint.tablet`
            flex: 1 1 50%;
            width: 50%;
            margin-bottom: 0;
          `}
        `}
    }
`;

export const HeaderText = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing.medium};

  a {
    text-decoration: none;
  }
`;
