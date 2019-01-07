import styled from 'styled-components'

export const SubpageNextPrevAnchor = styled.a`
  text-decoration: none;

  span {
    text-decoration: underline;
  }
`

export const SubpageNextPrevAnchorSpan = styled.div`
  display: block;
  font-size: 1.4em;
  margin: 0 0 0.4em;

  ${props =>
    props.title === 'Next' &&
    `
      &:after {
       content '>';
       margin: 0 0 0 0.2em;
      }
    `}

  ${props =>
    props.title === 'Prev' &&
    ` &:before {
       content '<';
       margin: 0 0.2em 0 0;
      }
    `}
`

export const SubpageNextPrevWrap = styled.div`
  display: flex;
`

export const SubpageNextPrevButtonWrap = styled.div`
  width: 50%;
`
