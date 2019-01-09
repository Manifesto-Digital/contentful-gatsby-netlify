import styled from 'styled-components';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0
    ${props => (props.padding === false ? 0 : props.theme.spacing.padding)};
`;
