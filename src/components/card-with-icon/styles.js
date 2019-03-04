import SVG from 'react-inlinesvg';
import styled from 'styled-components';
import CTA from '../cta';
import { breakpoint } from '../theme/breakpoint';

export const CardContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 100%;
  padding: ${({ theme }) => theme.spacing.standard};
  text-align: center;
  background: ${({ theme }) => theme.palette.offWhite};
  box-shadow: ${({ theme }) => theme.boxshadow.small};
  border-radius: ${({ theme }) => theme.borderradius.small};
  margin-bottom: ${({ theme }) => theme.spacing.standard};

  ${breakpoint.tablet`
    flex-basis: ${({ cardsCount }) =>
      (cardsCount === 1 && '100%') ||
      (cardsCount === 2 && '49%') ||
      (cardsCount === 3 && '32.333%')};
  `}

  &:hover {
    box-shadow: ${({ theme }) => theme.boxshadow.standard};
  }
`;

export const CardSVG = styled(SVG)`
  fill: ${({ theme }) => theme.palette.black};
  width: 40px;
  height: 40px;
  display: inline-block;
`;

export const TitleText = styled.h3`
  margin-top: ${({ theme }) => theme.spacing.medium};
`;

export const SubText = styled.p`
  margin-top: ${({ theme }) => theme.spacing.standard};
`;

export const CardCTA = styled(CTA)`
  margin-top: auto;
`;
