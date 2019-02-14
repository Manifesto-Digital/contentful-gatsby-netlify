import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import { breakpoint } from '../../theme/breakpoint';
import CTA from '../../cta';
import Button from '../../button';

export const FlexColumn = styled.div`
  flex: auto;
  margin-top: ${props => props.theme.spacing.standard};

  &:nth-child(2n) {
    margin-top: 0;
  }

  ${breakpoint.desktop`
    margin-top: 0;
    flex: ${props => (props.flexColumn1 ? props.flexColumn1 : `auto`)};
    flex-direction: column;
    display: flex;

    &:nth-child(2n) {
      flex: ${props => (props.flexColumn2 ? props.flexColumn2 : `auto`)};
      align-self: ${props =>
        props.alignColumn2 ? props.alignColumn2 : `start`};
    }
  `};
`;

export const UnbulletedList = styled.ul`
  margin-top: ${props => props.theme.spacing.small};
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
  color: ${props => props.theme.palette.primary};
`;

export const MapButton = styled.a`
  margin-left: ${props => props.theme.spacing.small};
  padding: 5px;
  background: ${props => props.theme.palette.sanMarinoBlue};
  color: white;
  cursor: pointer;

  &:hover {
    color: white;
  }
`;
