import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import { buttonReset } from '../../styled/buttons';
import { breakpoint } from '../../theme/breakpoint';

export const Close = styled.button`
  ${buttonReset}
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  padding: 0;
  margin-left: auto;
  cursor: pointer;

  ${breakpoint.desktop`
    display: none;
  `}
`;

export const SubNavButton = styled(Close)`
  height: auto;
  margin-left: 10px;
  width: 25px;

  ${breakpoint.desktop`
    display: flex;
  `}
`;

export const StyledMenuSVG = styled(SVG)`
  display: block;
  width: 20px;
`;

export const ArrowSVG = styled(SVG)`
  display: block;
  fill: ${({ theme }) => theme.palette.black};
  width: 20px;
  cursor: pointer;
`;
