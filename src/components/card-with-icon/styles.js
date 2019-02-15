import SVG from 'react-inlinesvg';
import styled from 'styled-components';
import CTA from '../cta';
import { breakpoint } from '../theme/breakpoint';

export const CardContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 100%;
  padding: ${props => props.theme.spacing.standard};
  text-align: center;
  background: ${props => props.theme.palette.offWhite};
  box-shadow: ${props => props.theme.boxshadow.small};
  border-radius: ${props => props.theme.borderradius.small};
  margin-bottom: ${props => props.theme.spacing.standard};

  ${breakpoint.tablet`
    flex-basis: ${({ cardsCount }) =>
      (cardsCount === 1 && '100%') ||
      (cardsCount === 2 && '49%') ||
      (cardsCount === 3 && '32.333%')};
  `}

  &:hover {
    box-shadow: ${props => props.theme.boxshadow.standard};
  }
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
  margin-top: auto;
`;
