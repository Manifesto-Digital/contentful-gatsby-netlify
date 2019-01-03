import styled from 'styled-components'
import { breakpoint } from '../theme/breakpoint'

export const Wrapper = styled.div`
  margin-bottom: ${props =>
    props.removeMarginBottom ? '0' : props.theme.spacing.largePadding};
  padding: ${props => props.theme.spacing.padding};
  background-color: ${props => props.theme.palette.greyLight};
`

export const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 25px;
  height: 0;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

export const BottomText = styled.p`
  margin-top: ${props => props.theme.spacing.padding};
`
