import styled from 'styled-components';
import { breakpoint } from '../theme/breakpoint';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${props => props.theme.spacing.large} 0;
  padding: ${props => props.theme.spacing.standard};
  background: ${props => props.theme.palette.white};
  box-shadow: ${props => props.theme.boxshadow.small};
  border-radius: 3px;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${breakpoint.desktop`
    flex-direction: row;
    flex-wrap: wrap;
  `};
`;

export const ListItem = styled.div`
  margin-bottom: ${props => props.theme.spacing.standard};
  padding-right: ${props => props.theme.spacing.standard};
  font-size: ${props => props.theme.fontsize.small};
  font-weight: 400;
  text-decoration: none;
  ${breakpoint.desktop`
    flex: 0 0 ${props => 100 / props.rowCount}%;
  `};

  &:hover {
    color: ${props => props.theme.palette.primary};
  }
`;
