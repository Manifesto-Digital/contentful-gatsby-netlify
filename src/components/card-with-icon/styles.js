import SVG from 'react-inlinesvg';
import styled from 'styled-components';
import CTA from '../cta';
import { breakpoint } from '../theme/breakpoint';

export const CardContainer = styled.div`
  width: 100%;
  flex: auto;
  padding: ${props => props.theme.spacing.medium};
  text-align: center;
  background: ${props => props.theme.palette.offWhite};
  margin: ${props => props.theme.spacing.standard} 0 0 0;
  box-shadow: ${props => props.theme.boxshadow.small};
  border-radius: ${props => props.theme.borderradius.small};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  &:hover {
    box-shadow: ${props => props.theme.boxshadow.standard};
  }

  &:first-child {
    margin: 0;
  }

  ${breakpoint.desktop`
    width: auto;
    flex: 1;
    margin: ${props =>
      props.insideContainer === true
        ? `0 0 0 ${props.theme.spacing.small}`
        : 0};

    &:fist-child {
      margin: 0;
    }
  `}
`;

export const CardSVG = styled(SVG)`
  fill: ${props => props.theme.palette.black};
  width: 40px;
  height: 40px;
  display: inline-block;
`;

export const TitleText = styled.h3`
  margin-top: ${props => props.theme.spacing.medium};
`;

export const SubText = styled.p`
  margin-top: ${props => props.theme.spacing.standard};
`;

export const CardCTA = styled(CTA)`
  /* TODO: Find a way to align the CTA at the bottom of the container */
  width: 90%;
`;
