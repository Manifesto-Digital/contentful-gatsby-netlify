import styled, { css } from 'styled-components';
import { breakpoint } from '../theme/breakpoint';
import { Card } from '../content-card/styles';

export const BannerBackground = styled.section`
  background-color: ${props =>
    (props.bannerColour === 'white' && props.theme.palette.white) ||
    (props.bannerColour === 'grey' && props.theme.palette.grey10)};
  };
`;

export const HeaderText = styled.div`
  padding-top: ${props => props.theme.spacing.standard};
  padding-right: ${props => props.theme.spacing.standard};
  padding-left: ${props => props.theme.spacing.standard};
`;

export const CardRow = styled.div`
  // Some padding has to be on parent to stop firefox margin error on contents
  padding: ${props => props.theme.spacing.small};
  display: flex;
  flex-flow: column nowrap;
  ${breakpoint.tablet`
    flex-flow: row wrap;
  `};

  ${Card} {
    ${breakpoint.tablet`
      ${props =>
        props.items === 2 &&
        css`
          ${breakpoint.desktopWide`
          &:first-child { margin-left: 20vw; }
          &:last-child { margin-right: 20vw; }
        `};
        `}

      ${props => props.items === 3 && css``}

      ${props =>
        props.items === 4 &&
        css`
          flex: 0 auto;
          width: calc(50% - 20px);
        `}
    `};

    ${breakpoint.desktop`
      width: auto;
      flex: 1;
    `};
  }
`;
