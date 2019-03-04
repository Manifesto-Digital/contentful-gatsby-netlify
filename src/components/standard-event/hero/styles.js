import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import { breakpoint } from '../../theme/breakpoint';
import CTA from '../../cta';
import Button from '../../button';

export const FlexHeroContent = styled.div`
  flex: auto;
  margin-top: ${({ theme }) => theme.spacing.standard};

  ${breakpoint.desktop`
    margin-top: 0;
    flex: .35;
    flex-direction: column;
    display: flex;
  `};
`;

export const FlexHeroImage = styled.div`
  flex: auto;

  ${breakpoint.desktop`
    flex: .60;
  `};
`;

export const UnbulletedList = styled.ul`
  margin-top: ${({ theme }) => theme.spacing.small};
  list-style: none;
  padding-left: 0;
`;

export const StyledCTA = styled(CTA)`
  margin-top: auto;
`;

export const StyledButton = styled(Button)`
  margin-top: auto;
`;

export const StyledSVG = styled(SVG)`
  width: 20px;
  height: 20px;
  margin-top: -2px;
  margin-right: 10px;
  vertical-align: top;
  fill: ${({ theme }) => theme.palette.primary};
  color: ${({ theme }) => theme.palette.primary};
  display: inline-block;
`;

export const MoneySpan = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.palette.primary};
`;

export const MapButton = styled.a`
  margin-left: ${({ theme }) => theme.spacing.small};
  padding: 5px;
  background: ${({ theme }) => theme.palette.sanMarinoBlue};
  color: white;
  cursor: pointer;

  &:hover {
    color: white;
  }
`;
