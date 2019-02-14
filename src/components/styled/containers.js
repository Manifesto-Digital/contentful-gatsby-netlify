import styled from 'styled-components';
import { breakpoint } from '../theme/breakpoint';

export const Container = styled.div`
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0
    ${props => (props.padding === false ? 0 : props.theme.spacing.standard)};
`;

export const TwoThirds = styled.div`
  max-width: 100%;
  width: 100%;
  padding: 0 ${props => (props.padding ? props.theme.spacing.standard : 0)};

  ${breakpoint.tablet`
    max-width: 66%;
  `};
`;

export const ContentWithSideBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${breakpoint.tablet`
    flex-direction: row;
  `};
`;

export const SideBar = styled.div`
  max-width: 100%;

  ${breakpoint.tablet`
    padding-left: ${props => props.theme.spacing.standard};
  `};

  ${breakpoint.desktop`
    max-width: 32%;
    margin-top: 0;
    padding-left: ${props => props.theme.spacing.xl};
  `};
`;

export const FlexBetweenContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap-reverse;
`;

export const Section = styled.section`
  padding: ${props => props.theme.spacing.medium} 0;
  background-color: ${props =>
    props.backgroundColour
      ? props.backgroundColour
      : props.theme.palette.white};
`;
