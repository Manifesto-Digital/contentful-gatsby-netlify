import styled from 'styled-components'
import { breakpoint } from '../theme/breakpoint'

export const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.65em 1em;
  background-color: ${props => props.theme.palette.greyMed};
  color: ${props => props.theme.palette.white};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`
export const Filesize = styled.p`
  font-size: 0.65em;
  margin-bottom: 5px;
`

export const ButtonText = styled.p`
  margin-bottom: 5px;
`

export const ButtonSVG = styled.svg`
  display: block;
  fill: ${props => props.theme.palette.white};
  float: right;
  flex-shrink: 0;
  width: 20px;
  height: 20px;

  ${breakpoint.tablet` 
    width: 25px;
    height: 25px;
  `}
`