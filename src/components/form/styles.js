import styled from 'styled-components';
import { buttonStyles } from '../styled/buttons';

export const ModuleWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.standard};
`;

export const FormWrapper = styled.div`
  ${({ backgroundColour, theme }) =>
    backgroundColour === 'grey' &&
    `
  padding:${theme.spacing.standard} ${theme.spacing.standard} 0 ${
      theme.spacing.standard
    } };

  background-color: ${theme.palette.offWhite};
  border: 1px solid ${theme.palette.grey10};
`}
`;

export const FormFieldWrapper = styled.div`
  margin: 0 0 ${({ theme }) => theme.spacing.standard};
`;

export const SubmitInput = styled.input`
  ${buttonStyles}
`;
