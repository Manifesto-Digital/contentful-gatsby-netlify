import styled from 'styled-components'
import { breakpoint } from '../theme/breakpoint'
import { absoluteCenter } from '../styled/utils'

export const HeroNoCard = styled.div`
  width: 100vw;
  position: relative;
  overflow: hidden;
  padding-top: 350px;
  margin-bottom: ${props => props.theme.spacing.padding};
  ${breakpoint.tablet`
    padding-top: 60vh;
`};
`

export const MediaWrapper = styled.div`
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
    max-width: none;
    height: 350px;

    ${breakpoint.tablet`
        height: auto;
    `};
  }
`

export const Content = styled.div`
  ${absoluteCenter};
  text-align: center;
  width: 100%;
  padding: 0 ${props => props.theme.spacing.padding};
  color: ${props =>
    props.black
      ? `${props.theme.palette.black}`
      : `${props.theme.palette.white}`};
`

export const Title = styled.h1`
  margin-bottom: 0;
`
export const Subtitle = styled.p`
  font-size: ${props => props.theme.headers.h2};
  margin-bottom: 0;
`
