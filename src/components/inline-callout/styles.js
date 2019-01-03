import styled from 'styled-components'
import RichText from '../rich-text'

export const InlineBanner = styled.div`
  position: relative;
  clear: both;
  background: ${props => props.theme.palette.grey10};
  padding: ${props => props.theme.spacing.padding};
  margin-bottom: 1em;
  border-left: 4px solid;
  border-color: ${props => props.theme.palette.primary};
`

export const TextWrapper = styled(RichText)`
  display: inline-block;
  & > :last-child {
    margin-bottom: 0;
  }
`

export const BannerSVG = styled.svg`
  fill: ${props => props.theme.palette.black};
  width: 30px;
  height: 30px;
  margin-right: 1em;
  display: inline-block;
  vertical-align: top;

  + div {
    width: calc(100% - 3em);
  }
`
