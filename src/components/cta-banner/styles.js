import styled from 'styled-components'

export const Banner = styled.section`
  padding: ${props => props.theme.spacing.padding} 0;
  background-color: ${props =>
    (props.bannerColour === 'red' && props.theme.palette.primary) ||
    (props.bannerColour === 'san marino blue' &&
      props.theme.palette.sanMarinoBlue) ||
    (props.bannerColour === 'black' && props.theme.palette.black)};
  margin-bottom: ${props =>
    props.removeMarginBottom ? '0' : props.theme.spacing.largePadding};
`

export const Header = styled.h3`
  color: ${props =>
    (props.bannerColour === 'red' && props.theme.palette.white) ||
    (props.bannerColour === 'san marino blue' && props.theme.palette.white) ||
    (props.bannerColour === 'black' && props.theme.palette.white)};
`
