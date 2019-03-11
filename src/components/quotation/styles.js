import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import { breakpoint } from '../theme/breakpoint';
import Image from '../image';

export const Wrapper = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  ${breakpoint.mobileLand`
    flex-direction: row-reverse;
  `};
`;

export const Blockquote = styled.blockquote`
  flex: 1;
  position: relative;
  margin-right: ${({ theme }) => theme.spacing.standard};
  margin-bottom: 0;
  padding: ${({ theme }) =>
    ` ${theme.spacing.xl} ${theme.spacing.standard} ${theme.spacing.standard} ${
      theme.spacing.standard
    }`};
  border-left: 4px solid ${({ theme }) => theme.palette.primary};
  font-size: ${({ theme }) => theme.headers.h3};
  font-weight: 300;
`;

export const QuoteImage = styled(Image)`
  width: 100%;
  max-width: 100%;
  min-height: 0;
  align-self: center;
  margin-bottom: ${({ theme }) => theme.spacing.standard};

  ${breakpoint.mobileLand`
    margin-bottom: 0;
    max-width: 50%;
    width: 300px;
  `};
`;

export const QuoteMark = styled(SVG)`
  display: block;
  position: absolute;
  top: ${({ theme }) => theme.spacing.small};
  left: ${({ theme }) => theme.spacing.standard};
  color: ${({ theme }) => theme.palette.primary};

  svg {
    width: 30px;
    height: 30px;
  }
`;
