import styled from 'styled-components';
import Button from '../button';
import { breakpoint } from '../theme/breakpoint';
import TextInput from '../forms/text-input';

export const AdviceSearchForm = styled.form`
  padding: ${props => props.theme.spacing.standard};
  background-color: ${props => props.theme.palette.offWhite};
  margin-bottom: ${props => props.theme.spacing.standard};
`;

export const SearchInput = styled(TextInput)`
  margin-bottom: ${props => props.theme.spacing.small};
  width: 100%;
  ${breakpoint.tablet`
        display: inline-block;
        width: 75%;
        margin-right: ${props => props.theme.spacing.small};
    `};
`;

export const SearchButton = styled(Button)`
  width: auto;
  padding: ${props => props.theme.spacing.small};
  ${breakpoint.tablet`
        display: inline-block;
    `};
`;
