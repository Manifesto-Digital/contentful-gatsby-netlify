import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import { breakpoint } from '../theme/breakpoint';

export const Title = styled.h2`
  margin-bottom: ${props => props.theme.spacing.medium};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${props => props.theme.spacing.large} 0;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${breakpoint.tablet`
    flex-direction: row;
    flex-wrap: wrap;
  `};
`;

export const ListItem = styled.a`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${props => props.theme.spacing.standard};
  margin-right: ${props => props.theme.spacing.standard};
  padding: ${props => props.theme.spacing.standard};
  background: ${props => props.theme.palette.black};
  border: 2px solid ${props => props.theme.palette.black};
  color: ${props => props.theme.palette.white};
  font-size: ${props => props.theme.fontsize.standard};
  font-weight: 400;
  text-decoration: none;

  ${breakpoint.tablet`
    flex: 0 0 calc(${props => 100 / props.rowCount}% - ${props =>
    props.theme.spacing.standard});
  `};

  &:hover {
    background: ${props => props.theme.palette.white};
    color: ${props => props.theme.palette.black};
  }
`;

export const ArrowSVG = styled(SVG)`
  display: block;
  align-self: center;
  fill: ${props => props.theme.palette.white};
  flex-shrink: 0;
  width: 15px;
`;
