import styled from 'styled-components';
import ResponsiveImage from '../image/responsive.js';

// On hover, we animate the opacity of a second box shadow instead of the properties of the original for a smoother experience on older devices
export const HoverShadow = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  box-shadow: ${props => props.theme.boxshadow.standard};
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  opacity: 0;
`;

export const Card = styled.div`
  flex: 1;
  border-radius: 4px;
  box-shadow: ${props => props.theme.boxshadow.small};
  background: ${props => props.theme.palette.white};
  margin-bottom: ${props => props.theme.spacing.standard};
  position: relative;

  &:hover ${HoverShadow} {
    opacity: 1;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const CardImage = styled(ResponsiveImage)`
  border-radius: 4px 4px 0 0;
  opacity: 0.5;
`;

export const CardTitle = styled.div`
  background-color: ${props => props.theme.palette.primary};
  font-size: ${props => props.theme.fontsize.small};
  color: #fff;
  max-width: 100%;
  padding: 5px ${props => props.theme.spacing.standard};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: absolute;
  left: 0;
  bottom: -10px;
`;

export const SummaryText = styled.div`
  padding: ${props => props.theme.spacing.small}
    ${props => props.theme.spacing.standard};
  // The 15px is required in this particular instance as the title overlaps this area
  padding-top: 15px;
  color: ${props => props.theme.palette.sanMarinoBlue};
  font-size: ${props => props.theme.fontsize.small};
`;

export const Link = styled.a`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
`;
