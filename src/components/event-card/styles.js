import styled from 'styled-components';
import { breakpoint } from '../theme/breakpoint';
import ResponsiveImage from '../image/responsive';
import LinkHandler from '../link-handler';

export const Card = styled.div`
  background-color: ${({ theme }) => theme.palette.white};
  box-shadow: ${({ theme }) => theme.boxshadow.small};
  flex: 0 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: ${({ theme }) => theme.spacing.standard};

  ${breakpoint.mobileLand`
    flex: 0 49%;
  `};
`;

export const Thumbnail = styled(ResponsiveImage)`
  align-self: start;
`;

export const CardContent = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.standard};
`;

export const CategoryCTA = styled(LinkHandler)`
  display: block;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.lightBlue};
  text-decoration: none;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.small};
`;
