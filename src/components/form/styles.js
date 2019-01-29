import styled from 'styled-components';

export const FormWrapper = styled.div`
  margin-bottom: ${props => props.theme.spacing.standard};
`;

export const FormFieldWrapper = styled.div`
  margin: 0 0 0.8em;

  &:last-of-type {
    margin: 0;
  }
`;
