import styled from 'styled-components';
import { Link } from 'gatsby';
import { breakpoint } from '../theme/breakpoint';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${props => props.theme.spacing.largePadding} 0;
  padding: ${props => props.theme.spacing.padding};
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

export const StyledLink = styled(Link)`
  margin-bottom: ${props => props.theme.spacing.padding};
  font-size: ${props => props.theme.fontsize.small};
  font-weight: 400;
  text-decoration: none;
  ${breakpoint.desktop`
    flex: 0 0 ${props => (props.rowcount === 3 ? '33%' : '50%')};
  `};

  &:hover {
    color: ${props => props.theme.palette.primary};
  }
`;
