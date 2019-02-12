import styled from 'styled-components';
import { breakpoint } from '../theme/breakpoint';

export const Card = styled.div`
  background-color: ${({ theme }) => theme.palette.white};
  box-shadow: ${({ theme }) => theme.boxshadow.small};
  flex: 0 100%;
  margin-bottom: ${({ theme }) => theme.spacing.standard};

  ${breakpoint.mobileLand`
    flex: 0 49%;
  `};
`;

export const CardContent = styled.div`
  padding: ${({ theme }) => theme.spacing.standard};
`;

export const CategoryCTA = styled.a`
  display: block;
  background-color: ${({ theme }) => theme.palette.lightBlue};
  text-decoration: none;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.small};
`;
