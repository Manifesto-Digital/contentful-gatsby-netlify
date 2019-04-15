import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import { breakpoint } from '../../theme/breakpoint';

export const Wrapper = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.large};
  padding: ${({ theme }) => theme.spacing.xl} 0;
  background-color: ${({ theme }) => theme.palette.grey10};
`;

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Flex25 = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.palette.white};

  &:not(:last-of-type) {
    margin-bottom: ${({ theme }) => theme.spacing.standard};
  }

  ${breakpoint.mobileLand`
    flex-basis: calc(50% - ${({ theme }) => theme.spacing.small});
    margin-bottom: ${({ theme }) => theme.spacing.standard};
  `};

  ${breakpoint.desktop`
      flex: 1;
      width: auto;
      margin-right: ${({ theme }) => theme.spacing.medium};
      margin-bottom: 0;

      &:last-of-type {
        margin-right: 0;
    `};
`;

export const Content = styled.div`
  padding: ${({ theme }) => theme.spacing.standard};
  white-space: pre-line;

  p {
    margin-bottom: 0;
  }
`;

export const Heading = styled.h3`
  padding-bottom: ${({ theme }) => theme.spacing.standard};
  border-bottom: 1px solid ${({ theme }) => theme.palette.grey10};
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.headers.h4};
`;

export const Icon = styled(SVG)`
  margin-right: ${({ theme }) => theme.spacing.small};
  display: inline-block;
  height: 20px;
  width: 20px;

  svg {
    display: block;
    width: 20px;
    height: 20px;
  }
`;
