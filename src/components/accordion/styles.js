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
      top: ${({ theme }) => `-${theme.spacing.small}`};
      width: 100%;
      border-top: ${({ theme, active }) =>
        active && `1px solid ${theme.palette.grey45}`};
    }
  }
`;

export const Heading = styled.h3`
  position: relative;
  font-weight: normal;
  color: ${({ theme }) => theme.palette.grey10};
  margin-bottom: ${({ active }) => active && '0'};
`;

export const HeadingButton = styled.button`
  position: relative;
  ${buttonReset};
  padding: ${({ theme }) =>
    `${theme.spacing.standard} ${theme.spacing.xl} ${theme.spacing.standard} ${
      theme.spacing.standard
    }`};
  width: 100%;
  text-align: left;
  font-size: ${({ theme }) => theme.headers.h3};
`;

export const Content = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  padding: ${({ theme }) =>
    `${theme.spacing.standard} ${theme.spacing.standard} 0 ${
      theme.spacing.standard
    }`};
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
