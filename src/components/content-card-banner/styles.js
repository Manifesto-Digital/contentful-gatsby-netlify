import styled from 'styled-components';
import { breakpoint } from '../theme/breakpoint';

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
  ${breakpoint.tablet`
    display: flex;
    flex-flow: row nowrap;
  `};
`;
