import styled from 'styled-components';

export const FieldWrapper = styled.div`
  display: ${props => (props.inline ? 'flex' : 'block')};
  margin-bottom: ${props => props.theme.spacing.standard};
`;
