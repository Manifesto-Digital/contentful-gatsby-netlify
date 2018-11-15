import styled from 'styled-components'

export const BulletedList = styled.ul`
  margin-left: 0;
  padding-left: 0;
  list-style: none;

  li {
    padding-left: 2em;
    position: relative;

    &:before {
      content: ' ';
      display: block;
      width: 0.5em;
      height: 0.5em;
      background: ${props => props.theme.palette.black};
      position: absolute;
      left: 0.8em;
      top: 0.5em;
    }
  }
`
export const UnBulletedList = styled.ol`
  margin-left: 0;
  padding-left: 0;
  list-style: none;

  li {
    padding-left: 2em;
    position: relative;
    counter-increment: step-counter;

    &:before {
      content: counter(step-counter);
      font-size: inherit;
      display: block;
      min-width: 1em;
      position: absolute;
      left: 0.6em;
      top: 0;
      text-align: center;
    }
  }
`
