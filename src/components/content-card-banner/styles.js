import styled, { css } from 'styled-components';
import { breakpoint } from '../theme/breakpoint';
import { Card } from '../content-card/styles';

export const BannerBackground = styled.section`
  background: ${props =>
    (props.bannerColour === 'white' && props.theme.palette.white) ||
    (props.bannerColour === 'grey' && props.theme.palette.grey10)};
`;

export const HeaderText = styled.h2`
  padding-top: ${props => props.theme.spacing.standard};
`;

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
          flex-grow: 0;
          flex-basis: calc(
            ${100 / items}% - ${props => props.theme.spacing.small}
          );
        `}
    `};
  }
`;
