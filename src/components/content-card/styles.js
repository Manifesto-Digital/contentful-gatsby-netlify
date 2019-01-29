import styled from 'styled-components';
import { Link } from 'gatsby';
import ResponsiveImage from '../image/responsive.js';

export const Card = styled(Link)`
  position: relative;
  flex: 1;
  margin-bottom: ${props => props.theme.spacing.standard};
  background: ${props => props.theme.palette.white};
  border-radius: 4px;
  box-shadow: ${props => props.theme.boxshadow.small};
  text-decoration: none;

  &:hover {
    box-shadow: ${props => props.theme.boxshadow.standard};
  }
`;

export const CardImage = styled(ResponsiveImage)`
  border-radius: 4px 4px 0 0;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const CardTitle = styled.div`
  position: absolute;
  left: 0;
  bottom: -10px;
  max-width: 100%;
  padding: 5px ${props => props.theme.spacing.standard};
  background-color: ${props => props.theme.palette.primary};
  color: ${props => props.theme.palette.white};
  font-size: ${props => props.theme.fontsize.small};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const SummaryText = styled.div`
  padding-top: 15px;
  padding-right: ${props => props.theme.spacing.standard};
  padding-bottom: ${props => props.theme.spacing.small};
  padding-left: ${props => props.theme.spacing.standard};
  color: ${props => props.theme.palette.sanMarinoBlue};
  font-size: ${props => props.theme.fontsize.small};
`;
