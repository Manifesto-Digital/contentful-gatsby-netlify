import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-right: ${props => props.theme.spacing.standard};
`;

export const Label = styled.label`
  margin-top: ${props => props.theme.spacing.xs};
`;

export const LayoutWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
