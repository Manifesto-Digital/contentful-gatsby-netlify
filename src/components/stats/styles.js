import styled, { css } from 'styled-components';
import { breakpoint } from '../theme/breakpoint';

export const Wrapper = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Stat = styled.div`
  position: relative;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.large};
  text-align: center;

  ${({ cardType, index, theme }) =>
    cardType === 'line' &&
    css`
      background-color: ${(index === 0 && theme.palette.grey25) ||
        (index === 1 && theme.palette.grey15) ||
        (index === 2 && theme.palette.grey10)};
    `};

  ${({ cardType, index, theme }) =>
    cardType === 'grid' &&
    css`
      background-color: ${index % 2
        ? theme.palette.grey10
        : theme.palette.grey25};
    `};

  ${breakpoint.tablet`
    background-color: ${({ cardType }) => cardType === 'grid' && 'transparent'};
    width: ${({ cardType }) => (cardType === 'grid' ? '50%' : '33%')}
  `};
`;

export const StatRow = styled.div`
  background: ${({ theme, alt }) =>
    alt
      ? `linear-gradient( 90deg, ${theme.palette.grey25}, ${
          theme.palette.grey25
        } 50%, ${theme.palette.grey10} 0, ${theme.palette.grey10})`
      : `linear-gradient( 90deg, ${theme.palette.grey10}, ${
          theme.palette.grey10
        } 50%, ${theme.palette.grey25} 0, ${theme.palette.grey25})`};
`;

export const Title = styled.h2`
  font-size: 3rem;
  font-weight: normal;
  line-height: 1;
  margin-bottom: ${({ theme }) => theme.spacing.large};

  ${breakpoint.desktop`
    font-size: 4rem;
  `}

  span {
    color: ${({ theme }) => theme.palette.primary};
  }
`;
