import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-bottom: ${props =>
    props.paddingBottom ? props.theme.spacing.large : 0};
  color: ${props => props.legal && 'red'};

  h1 {
    margin-bottom: ${props => props.theme.spacing.standard};
    padding-top: ${props => props.theme.spacing.large};
  }

  p:last-of-type {
    margin-bottom: ${props => (props.paddingBottom ? 0 : null)};
  }
`;
