import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import LinkHandler from '../link-handler';
import ResponsiveImage from '../image/responsive.js';

export const Card = styled.div`
  position: relative;
  margin-bottom: ${props => props.theme.spacing.standard};
  background: ${props => props.theme.palette.white};
  border-radius: ${props => props.theme.borderradius.small};
  box-shadow: ${props => props.theme.boxshadow.small};
  text-decoration: none;

  &:hover {
    box-shadow: ${props => props.theme.boxshadow.standard};
  }
`;

export const CardImage = styled(ResponsiveImage)`
  width: 100%;
  border-radius: ${props => props.theme.borderradius.small}
    ${props => props.theme.borderradius.small} 0;
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const CardTitle = styled.h3`
  position: absolute;
  top: -20px;
  max-width: 100%;
  margin-bottom: 0;
  padding: 5px ${props => props.theme.spacing.standard};
  background-color: ${props => props.theme.palette.primary};
  color: ${props => props.theme.palette.white};
  font-size: 16px;
  font-weight: normal;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const SummaryText = styled(LinkHandler)`
  display: block;
  padding: ${props => props.theme.spacing.standard};
  color: ${props => props.theme.palette.sanMarinoBlue};
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
  color: ${props => props.theme.palette.white};

  svg {
    width: 100%;
  }
`;
