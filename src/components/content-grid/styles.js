import styled from 'styled-components';
import { breakpoint } from '../theme/breakpoint';
import RichText from '../rich-text';

export const Grid = styled.section`
  display: block;
  margin-bottom: ${props => props.theme.spacing.standard};
`;

export const ItemsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Item = styled(RichText)`
  margin-bottom: ${props => props.theme.spacing.standard};

  ${breakpoint.tablet`
    width: 49%;
  `}
`;
