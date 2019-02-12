import SVG from 'react-inlinesvg';
import styled from 'styled-components';
import CTA from '../cta';
import { breakpoint } from '../theme/breakpoint';

export const CardContainer = styled.div`
  flex: auto;
  padding: ${props => props.theme.spacing.medium};
  text-align: center;
  background: ${props => props.theme.palette.offWhite};
  margin: ${props => props.theme.spacing.standard};
  box-shadow: ${props => props.theme.boxshadow.small};
  border-radius: ${props => props.theme.borderradius.small};
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  &:hover {
    box-shadow: ${props => props.theme.boxshadow.standard};
  }

  ${breakpoint.desktop`
    width: auto;
    flex: 1;
  `}
`;

export const Wrapper = styled.div``;

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
  margin-top: auto;
`;
