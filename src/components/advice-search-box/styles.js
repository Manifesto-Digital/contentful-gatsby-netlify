import styled from 'styled-components';
// import Button from '../button';
import { ButtonWithIcon } from '../button';
import { breakpoint } from '../theme/breakpoint';

export const AdviceSearchForm = styled.form`
  padding: ${props => props.theme.spacing.padding};
  background-color: ${props => props.theme.palette.offWhite};
`;

export const SearchInput = styled.input`
  margin-bottom: 1em;
  ${breakpoint.tablet`
        display: inline-block;
        width: 75%;
        margin-right: 2em;
    `};
`;

export const SearchButton = styled(ButtonWithIcon)`
  background: ${props => props.theme.palette.sanMarinoBlue};
  position: relative;
  width: auto;
  padding: ${props => props.theme.spacing.smallPadding};
  color: ${props => props.theme.palette.white};
  display: block;
  ${breakpoint.tablet`
        display: inline-block;
    `};
`;
