import styled from 'styled-components';
import { TwoThirds } from '../styled/containers';

export const IntroWrapper = styled(TwoThirds)`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const OtherEventsWrapper = styled.div`
  margin: ${({ theme }) => theme.spacing.large} 0
    ${({ theme }) => theme.spacing.standard};
  padding: ${({ theme }) => theme.spacing.large} 0
    ${({ theme }) => theme.spacing.standard};
  background-color: ${({ theme }) => theme.palette.grey10};
  position: relative;
`;
