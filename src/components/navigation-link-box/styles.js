import styled from 'styled-components'
import { Link } from 'gatsby'
import { breakpoint } from '../theme/breakpoint'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${props => props.theme.spacing.largePadding} 0;
  padding: ${props => props.theme.spacing.padding};
  background: ${props => props.theme.palette.white};
  border-radius: 3px;
  box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.12), 0 1.5px 6px rgba(0, 0, 0, 0.06);
`

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${breakpoint.desktop`
    flex-direction: row;
    flex-wrap: wrap;
  `};
`

export const StyledLink = styled(Link)`
  margin-bottom: ${props => props.theme.spacing.padding};
  font-size: ${props => props.theme.fontsize.small};
  font-weight: 400;
  text-decoration: none;
  ${breakpoint.desktop`
    flex: 0 0 33%;
  `};

  &:hover {
    color: ${props => props.theme.palette.primary};
  }
`
