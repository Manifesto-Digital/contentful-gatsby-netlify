import styled from 'styled-components'
import { breakpoint } from '../theme/breakpoint'

export const Banner = styled.section`
  padding: ${props => props.theme.spacing.padding} 0;
  background-color: ${props => props.theme.palette.donate};
  margin-bottom: ${props =>
    props.removeMarginBottom ? '0' : props.theme.spacing.largePadding};
`
export const Wrapper = styled.section`
  ${breakpoint.desktop`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `};
`

export const Header = styled.h3`
  color: ${props => props.theme.palette.white};
  margin-bottom: ${props => props.theme.padding};

  ${breakpoint.desktop`
    flex: 1;
    margin-bottom: 0;
  `};
`

export const FormWrapper = styled.div``

export const Button = styled.button`
  padding: 10px; /* Will replace */
  margin-left: ${props => props.theme.smallPadding};
`
