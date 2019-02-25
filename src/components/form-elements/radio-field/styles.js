import styled from 'styled-components';

export const Input = styled.input`
  margin-right: ${props => props.theme.spacing.small};
  vertical-align: middle;
`;

export const InputWrapper = styled.div`
  margin-bottom: ${props => props.theme.spacing.small};
  margin-right: ${props =>
    props.marginRight ? props.theme.spacing.small : null};
`;

export const Label = styled.label`
  margin-bottom: 0;
  line-height: 1;
  vertical-align: middle;
`;

export const LayoutWrapper = styled.div`
  display: ${props => (props.inline ? 'flex' : 'block')};
`;
