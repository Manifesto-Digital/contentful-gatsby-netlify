import styled from 'styled-components'
import { breakpoint } from '../theme/breakpoint'

export const Banner = styled.div`
  padding: ${props => props.theme.spacing.padding} 0;
  margin-bottom: ${props =>
    props.removeMarginBottom ? '0' : props.theme.spacing.largePadding};
`

export const Wrapper = styled.div`
  overflow: hidden;
  max-width: 27em;
  width: 100%;
`

export const Header = styled.p`
  font-weight: bold;
`

export const FileImage = styled.div`
  display: none;
  float: left;
  max-width: 90px;
  margin-right: ${props => props.theme.spacing.padding};

  ${breakpoint.mobileLand`
    display: block;
  `};
`

export const FileDetails = styled.div`
  overflow: auto;
  position: relative;
`
