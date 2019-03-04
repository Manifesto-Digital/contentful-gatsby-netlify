import styled from 'styled-components';
import { breakpoint } from '../theme/breakpoint';

export const Banner = styled.div`
  padding: ${({ theme }) => theme.spacing.standard} 0;
  margin-bottom: ${({ removeMarginBottom, theme }) =>
    removeMarginBottom ? '0' : theme.spacing.large};
`;

export const Wrapper = styled.div`
  overflow: hidden;
  max-width: 27em;
  width: 100%;
`;

export const Header = styled.p`
  font-weight: bold;
`;

export const FileImage = styled.div`
  display: none;
  float: left;
  max-width: 90px;
  margin-right: ${({ theme }) => theme.spacing.standard};

  ${breakpoint.mobileLand`
    display: block;
  `};
`;

export const FileDetails = styled.div`
  overflow: auto;
  position: relative;
`;
