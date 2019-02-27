import styled from 'styled-components';
import Button from '../button';
import { breakpoint } from '../theme/breakpoint';
import TextInput from '../form-elements/text-input';

export const AdviceSearchForm = styled.form`
  padding: ${({ theme }) => theme.spacing.standard};
  background-color: ${({ theme }) => theme.palette.offWhite};
  margin-bottom: ${({ theme }) => theme.spacing.standard};
`;

export const SearchInput = styled(TextInput)`
  margin-bottom: ${({ theme }) => theme.spacing.small};
  width: 100%;
  ${breakpoint.tablet`
        display: inline-block;
        width: 75%;
        margin-right: ${({ theme }) => theme.spacing.small};
    `};
`;

export const SearchButton = styled(Button)`
  width: auto;
  padding: ${({ theme }) => theme.spacing.small};
  ${breakpoint.tablet`
        display: inline-block;
    `};
`;
