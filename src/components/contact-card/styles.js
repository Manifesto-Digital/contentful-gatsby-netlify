import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import { breakpoint } from '../theme/breakpoint';

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: ${({ theme }) => theme.spacing.standard};
`;

export const Card = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.spacing.standard};
  background-color: ${({ theme }) => theme.palette.offWhite};
  flex: 0 0 100%;
  margin-bottom: ${({ theme }) => theme.spacing.standard};

  &:last-child {
    margin: 0;
  }

  ${breakpoint.tablet`
    flex: 1;
    margin-bottom: 0;
    margin-right: ${({ theme }) => theme.spacing.standard};
  `};
`;

export const Icon = styled(SVG)`
  width: 30px;
  max-height: 50px;
  margin-right: ${({ theme }) => theme.spacing.standard};
`;
