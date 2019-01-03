import styled from 'styled-components'

export const InlineBanner = styled.div`
  position: relative;
  clear: both;
  background: ${props => props.theme.palette.greyLight};
  padding: ${props => props.theme.spacing.padding};
  margin-bottom: 1em;
  border-left: 4px solid;
  border-color: ${props => props.theme.palette.primary};

  & > :last-child {
    margin-bottom: 0;
  }
`

export const BannerSVG = styled.svg`
  display: block;
  fill: ${props => props.theme.palette.black};
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  background: green;
`
