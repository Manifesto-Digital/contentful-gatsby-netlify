import styled from 'styled-components'
import LinkHandler from '../link-handler'

export const Wrapper = styled.section`
  padding: ${props => props.theme.spacing.padding} 0;
  background-color: ${props =>
    (props.bg === 'red' && props.theme.palette.primary) ||
    (props.bg === 'san marino blue' && props.theme.palette.sanMarinoBlue) ||
    (props.bg === 'black' && props.theme.palette.black)};
  margin-bottom: ${props =>
    props.removeMarginBottom ? '0' : props.theme.spacing.largePadding};
`

export const Header = styled.h2`
  color: ${props =>
    (props.bg === 'red' && props.theme.palette.white) ||
    (props.bg === 'san marino blue' && props.theme.palette.white) ||
    (props.bg === 'black' && props.theme.palette.white)};
`
export const StyledLinkHandler = styled(LinkHandler)`
  color: ${props =>
    (props.bg === 'red' && props.theme.palette.white) ||
    (props.bg === 'san marino blue' && props.theme.palette.white) ||
    (props.bg === 'black' && props.theme.palette.white)};
`
