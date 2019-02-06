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
  background: ${props =>
    (props.bannerColour === 'white' && props.theme.palette.white) ||
    (props.bannerColour === 'grey' && props.theme.palette.grey10)};
  padding: ${props => props.theme.spacing.medium} 0;

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
            margin-right: ${props => props.theme.spacing.standard};
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
  margin-bottom: ${props => props.theme.spacing.medium};
  padding-top: ${props => props.theme.spacing.standard};

  a {
    text-decoration: none;
  }
`;
