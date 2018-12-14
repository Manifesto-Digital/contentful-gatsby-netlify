import styled from 'styled-components'
import { breakpoint } from '../theme/breakpoint'

export const Grid = styled.div`
  display: block;
  margin-bottom: ${props => props.theme.spacing.padding};
`

export const ItemsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const Item = styled.div`
  margin-bottom: ${props => props.theme.spacing.padding};

  ${breakpoint.tablet`
    width: 49%;
  `}
`
