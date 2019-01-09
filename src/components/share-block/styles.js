import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import { breakpoint } from '../theme/breakpoint';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: ${props => props.theme.spacing.padding};
  border: 2px solid ${props => props.theme.palette.royalBlue};
`;

export const PrintButton = styled.button`
  padding: 0;
  background: none;
  border: none;
  color: inherit;
  font: inherit;
  cursor: pointer;
  appearance: none;
`;

export const StyledSVG = styled(SVG)`
  display: block;
  fill: ${props => props.theme.palette.royalBlue};

  svg {
    width: 20px;
    height: 20px;

    ${breakpoint.tablet`
      width: 25px;
      height: 25px;
    `}
  }
`;
