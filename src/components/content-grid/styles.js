import styled from 'styled-components';
import { breakpoint } from '../theme/breakpoint';
import RichText from '../rich-text';

export const Header = styled.h2`
  color: ${({ theme }) => theme.palette.black};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

export const Grid = styled.section`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.standard};
`;

export const ItemsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Item = styled(RichText)`
  margin-bottom: ${({ theme }) => theme.spacing.standard};
  border-bottom: ${({ theme, border }) => border && theme.divider.standard};

  ${breakpoint.tablet`
    width: 49%;
  `}
`;
