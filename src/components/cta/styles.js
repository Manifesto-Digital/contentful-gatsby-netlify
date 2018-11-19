import styled from 'styled-components'

export const ButtonLink = styled.a`
  display: inline-block;
  padding: 0.65em 2em;
  background-color: ${props =>
    (props.bg === 'red' && props.theme.palette.primary) ||
    (props.bg === 'black' && props.theme.palette.black) ||
    (props.bg === 'blue' && props.theme.palette.link) ||
    (props.bg === 'white outline' && 'transparent')};

  border: ${props =>
    props.bg === 'white outline'
      ? `1px solid ${props.theme.palette.white}`
      : 'none'};

  color: ${props =>
    (props.bg === 'red' && props.theme.palette.white) ||
    (props.bg === 'black' && props.theme.palette.white) ||
    (props.bg === 'blue' && props.theme.palette.white) ||
    (props.bg === 'white outline' && props.theme.palette.white)};
`
