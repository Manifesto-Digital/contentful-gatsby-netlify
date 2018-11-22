import styled from 'styled-components'
import { breakpoint } from '../theme/breakpoint'
import { absoluteCenter } from '../styled/utils'

export const HeroNoCard = styled.div`
  width: 100vw;
  position: relative;
  overflow: hidden;
  padding-top: 350px;
  margin-bottom: ${props => props.theme.spacing.largePadding};

  ${breakpoint.tablet`
    padding-top: 60vh;
`};
`

export const HeroWithCard = styled.div`
  width: 100vw;
  position: relative;
  overflow: hidden;
  margin-bottom: ${props => props.theme.spacing.largePadding};

  ${breakpoint.tablet`
    padding-top: 3em;
  `}
  ${breakpoint.desktop`
    padding-top: 10em;
  `}
`

export const CenteredMedia = styled.div`
  ${absoluteCenter};
  width: 100%;
  height: 100%;
  overflow: hidden;

  img {
    ${absoluteCenter};
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    height: 350px;
    max-width: none;

    ${breakpoint.tablet`
        height: auto;
    `};
  }
`

export const WithCardMedia = styled.div`
  img {
    min-width: 100%;
    ${breakpoint.tablet`
      height: auto;
      ${absoluteCenter};
    `};
  }
`

export const CenteredContent = styled.div`
  ${absoluteCenter};
  text-align: center;
  width: 100%;
  padding: 0 ${props => props.theme.spacing.padding};
  color: ${props =>
    props.black
      ? `${props.theme.palette.black}`
      : `${props.theme.palette.white}`};
`

export const CardContent = styled.div`
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  max-width: 60em;
  padding: 1em 1em 0;
  position: relative;
  width: 100%;
  background: hsla(0, 0%, 100%, 0.9);

  ${breakpoint.tablet` 
    float: ${props => (props.position === 'right' ? 'right' : 'left')};
    margin-bottom: 3em;
    width: 65%;
    padding-bottom: 1em;
  `}
  
  ${breakpoint.desktop`
    width: 55%;
    margin-bottom: 7em;
  `}
`
export const Title = styled.h1`
  margin-bottom: 0;
`
export const Subtitle = styled.p`
  font-size: ${props => props.theme.headers.h2};
  margin-bottom: 0;
`
export const CardSubtitle = styled.p`
  margin-bottom: ${props => props.theme.spacing.smallPadding};
  margin-top: ${props => props.theme.spacing.smallPadding};
`
export const CardLink = styled.a`
  &:hover {
    color: ${props => props.theme.palette.primary};
  }
`
