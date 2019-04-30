import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import { buttonReset } from '../styled/buttons';

export const Wrapper = styled.div`
  position: relative;

  &:not(:first-of-type) {
    &:before {
      position: absolute;
      content: ' ';
      left: 0;
      top: ${({ theme, footer }) => (footer ? `-${theme.spacing.small}` : '0')};
      width: 100%;
      border-top: ${({ theme, active }) =>
        active && `1px solid ${theme.palette.grey15}`};
    }
  }
`;

export const Heading = styled.h3`
  position: relative;
  font-weight: normal;
  margin-bottom: ${({ active }) => active && '0'};
  color: ${({ theme, isOpen }) =>
    isOpen ? theme.palette.primary : theme.palette.sanMarinoBlue};
`;

export const HeadingButton = styled.button`
  position: relative;
  ${buttonReset};
  width: 100%;
  padding: ${({ theme }) =>
    `${theme.spacing.standard} ${theme.spacing.xl} ${
      theme.spacing.standard
    } 0`};
  text-align: left;
  color: ${({ theme, isOpen }) =>
    isOpen ? theme.palette.primary : theme.palette.sanMarinoBlue};
`;

export const Content = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  padding: ${({ theme }) =>
    `${theme.spacing.standard} ${theme.spacing.standard} 0 0`};
`;

export const ArrowSVG = styled(SVG)`
  position: absolute;
  transform: ${({ isOpen }) => isOpen && 'rotate(180deg)'} translateY(-50%);
  transform-origin: top;
  top: 50%;
  right: ${({ theme }) => theme.spacing.standard};
  width: 20px;
  height: 25px;

  svg {
    display: block;
    width: 20px;
    height: 25px;
  }
`;

export const AccordionsWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;
