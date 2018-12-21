import styled from 'styled-components'
import LinkHandler from '../link-handler'

export const Wrapper = styled.div`
  padding: ${props => props.theme.spacing.padding} 0;
  background-color: ${props =>
    (props.bg === 'red' && props.theme.palette.primary) ||
    (props.bg === 'blue' && props.theme.palette.sanMarino) ||
    (props.bg === 'black' && props.theme.palette.black) ||
    (props.bg === 'green' && props.theme.palette.donate)};
  margin-bottom: ${props =>
    props.removeMarginBottom ? '0' : props.theme.spacing.largePadding};
`

export const Header = styled.h2`
  color: ${props =>
    (props.bg === 'red' && props.theme.palette.white) ||
    (props.bg === 'blue' && props.theme.palette.white) ||
    (props.bg === 'black' && props.theme.palette.white) ||
    (props.bg === 'green' && props.theme.palette.white)};
`
export const StyledLinkHandler = styled(LinkHandler)`
  color: ${props =>
    (props.bg === 'red' && props.theme.palette.white) ||
    (props.bg === 'blue' && props.theme.palette.white) ||
    (props.bg === 'black' && props.theme.palette.white) ||
    (props.bg === 'green' && props.theme.palette.white)};
`
