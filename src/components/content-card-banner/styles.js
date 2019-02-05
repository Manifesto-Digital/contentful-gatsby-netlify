import styled, { css } from 'styled-components';
import { breakpoint } from '../theme/breakpoint';
import { Card, Wrapper, SummaryText } from '../content-card/styles';
import RightArrow from '../../assets/svg/icons/angle-right-light.svg';

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
          flex: 0 1 100%;
          width: 100%;
          max-width: 600px;
        `}

      /* grid */
      ${({ bannerFlow }) =>
        bannerFlow === 'grid' &&
        css`
          flex: 0 1 100%;
          width: 100%;
          ${breakpoint.tablet`
            flex: 0 1 50%;
            width: 50%;
            margin-bottom: 0;
          `}
        `}
    }

    ${Wrapper} {
      ${({ bannerFlow }) =>
        bannerFlow === 'grid' &&
        css`
          position: absolute;
          bottom: 20px;
          left: 20px;
          margin-right: ${props => props.theme.spacing.standard};
          background: ${({ theme }) => theme.palette.overlayLight};
        `}
    }

    ${SummaryText} {
      ${({ bannerFlow }) =>
        bannerFlow === 'grid' &&
        css`
        padding-right: 35px;
          &::before,
          &::after {
            content: '';
            position: absolute;
          }

          &::before {
            bottom: 2px;
            right: 2px;
            width: 25px;
            height: 25px;
            background: ${({ theme }) => theme.palette.grey25};
          }

          &::after {
            bottom: 2px;
            right: 2px;
            width: 25px;
            height: 25px;
            color : white;
            background: url(${RightArrow}) center center no-repeat;
            filter: invert(100%);
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
