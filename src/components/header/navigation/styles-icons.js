import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import { buttonReset } from '../../styled/buttons';
import { breakpoint } from '../../theme/breakpoint';

export const MobileMenuClose = styled.button`
  ${buttonReset}
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 40px;
  padding: 0;
  margin-left: auto;
  cursor: pointer;

  ${breakpoint.desktop`
    display: none;
  `}
`;

export const SubNavButton = styled(MobileMenuClose)`
  height: auto;
  width: 25px;
  margin-left: 5px;

  svg {
    width: 15px;
  }

  ${breakpoint.desktop`
    display: ${({ legal }) => (legal ? 'none' : 'flex')};

    svg {
      width: auto;
    }
  `}
`;

export const MenuSVG = styled(SVG)`
  display: block;
  width: 20px;
`;

export const ArrowSVG = styled(SVG)`
  display: block;
  fill: ${({ theme }) => theme.palette.black};
  width: 20px;
  cursor: pointer;
`;
