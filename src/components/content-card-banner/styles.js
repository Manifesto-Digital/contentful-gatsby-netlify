import styled, { css } from 'styled-components';
import { breakpoint } from '../theme/breakpoint';
import { Card } from '../content-card/styles';

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
  margin-bottom: ${props => props.theme.spacing.standard};
  background: ${props =>
    (props.bannerColour === 'white' && props.theme.palette.white) ||
    (props.bannerColour === 'grey' && props.theme.palette.grey10)};

  padding: ${props =>
      props.bannerColour === 'grey' ? props.theme.spacing.medium : '0'}
    0;

  ${CardRow} {
    ${Card} {
      flex: ${props => props.bannerFlow === 'vertical' && '0 1 100%'};
      width: ${props => props.bannerFlow === 'vertical' && '100%'};
      max-width: ${props =>
        props.bannerFlow === 'vertical' ? '600px' : 'auto'};
    }
  }
`;

export const HeaderText = styled.h2`
  margin-bottom: ${props => props.theme.spacing.medium};

  a {
    text-decoration: none;
  }
`;
