import styled from 'styled-components'

export const Banner = styled.div`
  padding: ${props => props.theme.spacing.padding} 0;
  background-color: ${props =>
    (props.bannerColour === 'red' && props.theme.palette.primary) ||
    (props.bannerColour === 'blue' && props.theme.palette.sanMarino) ||
    (props.bannerColour === 'black' && props.theme.palette.black) ||
    (props.bannerColour === 'green' && props.theme.palette.donate)};
  margin-bottom: ${props =>
    props.removeMarginBottom ? '0' : props.theme.spacing.largePadding};
`

export const Header = styled.h3`
  color: ${props =>
    (props.bannerColour === 'red' && props.theme.palette.white) ||
    (props.bannerColour === 'blue' && props.theme.palette.white) ||
    (props.bannerColour === 'black' && props.theme.palette.white) ||
    (props.bannerColour === 'green' && props.theme.palette.white)};
`
