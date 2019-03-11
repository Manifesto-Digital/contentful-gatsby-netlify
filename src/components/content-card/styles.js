import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import LinkHandler from '../link-handler';
import ResponsiveImage from '../image/responsive.js';

export const Card = styled.div`
  position: relative;
  margin-bottom: ${({ theme }) => theme.spacing.standard};
  background: ${({ theme }) => theme.palette.white};
  border-radius: ${({ theme }) => theme.borderradius.small};
  box-shadow: ${({ theme }) => theme.boxshadow.small};
  text-decoration: none;

  &:hover {
    box-shadow: ${({ theme }) => theme.boxshadow.standard};
  }
`;

export const CardImage = styled(ResponsiveImage)`
  width: 100%;
  border-radius: ${({ theme }) => theme.borderradius.small}
    ${({ theme }) => theme.borderradius.small} 0;
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const CardTitle = styled.h3`
  position: absolute;
  top: -20px;
  max-width: 100%;
  margin-bottom: 0;
  padding: 5px ${({ theme }) => theme.spacing.standard};
  color: ${({ theme }) => theme.palette.white};
  font-size: 16px;
  font-weight: normal;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  background: ${({ bgColour, theme }) =>
    (bgColour === 'red' && theme.palette.primary) ||
    (bgColour === 'blue' && theme.palette.sanMarinoBlue) ||
    (bgColour === 'black' && theme.palette.black) ||
    (bgColour === 'donate' && theme.palette.donate) ||
    theme.palette.primary};

  color: ${({ bgColour, theme }) =>
    (bgColour === 'red' && theme.palette.white) ||
    (bgColour === 'black' && theme.palette.white) ||
    (bgColour === 'blue' && theme.palette.white) ||
    (bgColour === 'donate' && theme.palette.white)};

  &:hover {
    color: ${({ bgColour, theme }) =>
      (bgColour === 'red' && theme.palette.white) ||
      (bgColour === 'black' && theme.palette.white) ||
      (bgColour === 'blue' && theme.palette.white) ||
      (bgColour === 'donate' && theme.palette.white)};
  }
`;

export const SummaryText = styled(LinkHandler)`
  display: block;
  padding: ${({ theme }) => theme.spacing.standard};
  color: ${({ theme }) => theme.palette.sanMarinoBlue};
  text-decoration: none;
`;

export const CoveringLink = styled(LinkHandler)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  opacity: 0;
`;

export const ArrowSVG = styled(SVG)`
  display: flex;
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 25px;
  height: 25px;
  color: ${({ theme }) => theme.palette.white};

  svg {
    width: 100%;
  }
`;
