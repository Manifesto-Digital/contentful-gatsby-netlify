import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: ${props => props.theme.spacing.padding} 0;
  background-color: ${props =>
    (props.bg === 'red' && props.theme.palette.primary) ||
    (props.bg === 'blue' && props.theme.palette.link) ||
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
export const LinkText = styled.a`
  color: ${props =>
    (props.bg === 'red' && props.theme.palette.white) ||
    (props.bg === 'blue' && props.theme.palette.white) ||
    (props.bg === 'black' && props.theme.palette.white) ||
    (props.bg === 'green' && props.theme.palette.white)};
`
