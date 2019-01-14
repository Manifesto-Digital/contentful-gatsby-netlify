import styled from 'styled-components';
import Button from '../button';
import { breakpoint } from '../theme/breakpoint';
import TextInput from '../forms/text-input';

export const AdviceSearchForm = styled.form`
  padding: ${props => props.theme.spacing.standard};
  background-color: ${props => props.theme.palette.offWhite};
`;

export const SearchInput = styled(TextInput)`
  margin-bottom: 1em;
  ${breakpoint.tablet`
        display: inline-block;
        width: 75%;
        margin-right: 2em;
    `};
`;

export const SearchButton = styled(Button)`
  background: ${props => props.theme.palette.sanMarinoBlue};
  position: relative;
  width: auto;
  padding: ${props => props.theme.spacing.small};
  color: ${props => props.theme.palette.white};
  display: block;
  ${breakpoint.tablet`
        display: inline-block;
    `};
`;
