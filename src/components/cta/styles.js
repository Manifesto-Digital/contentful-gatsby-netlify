import styled from 'styled-components'

export const CtaIcon = styled.span`
  display: inline-block;
  margin-right: 5px;

  img {
    width: 1em;
    height: 1em;
    display: inline-block;
    vertical-align: text-bottom;
  }
`

export const CtaText = styled.span`
  display: inline-block;
`

export const ButtonLink = styled.a`
  display: inline-block;
  padding: 0.65em 1em;
  font-weight: normal;
  background-color: ${props =>
    (props.bg === 'red' && props.theme.palette.primary) ||
    (props.bg === 'black' && props.theme.palette.black) ||
    (props.bg === 'blue' && props.theme.palette.link) ||
    (props.bg === 'donate' && props.theme.palette.donate) ||
    (props.bg === 'white outline' && 'transparent')};

  border: ${props =>
    props.bg === 'white outline'
      ? `1px solid ${props.theme.palette.white}`
      : 'none'};

  color: ${props =>
    (props.bg === 'red' && props.theme.palette.white) ||
    (props.bg === 'black' && props.theme.palette.white) ||
    (props.bg === 'blue' && props.theme.palette.white) ||
    (props.bg === 'donate' && props.theme.palette.white) ||
    (props.bg === 'white outline' && props.theme.palette.white)};
`
