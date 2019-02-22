import styled from 'styled-components';
import { breakpoint } from '../theme/breakpoint';

export const TimeList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const Time = styled.li`
  display: flex;
  font-weight: ${({ today }) => today && 'bold'};
  color: ${({ theme, closed }) => closed && theme.palette.grey45};
`;

export const Day = styled.div`
  flex: 1;
`;

export const TimeVal = styled.div`
  ${breakpoint.mobileLand`
    flex: 4;
  `};
`;
