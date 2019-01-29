import styled from 'styled-components';
import LinkHandler from '../link-handler';
import ResponsiveImage from '../image/responsive.js';

export const Card = styled.div`
  position: relative;
  flex: 1;
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
  border-radius: ${props => props.theme.borderradius.small}
    ${props => props.theme.borderradius.small} 0;
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const CardTitle = styled.h3`
  position: absolute;
  margin-bottom: 0;
  top: -20px;
  max-width: 100%;
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
  padding: ${props => props.theme.spacing.standard};
  color: ${props => props.theme.palette.sanMarinoBlue};
  text-decoration: none;
  display: block;
`;

export const CoveringLink = styled(LinkHandler)`
  bottom: 0;
  left: 0;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 0;
`;
