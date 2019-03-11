import styled, { keyframes } from 'styled-components';
import SVG from 'react-inlinesvg';
import { breakpoint } from '../theme/breakpoint';
import { buttonStyles, buttonReset } from '../styled/buttons';
import { inputStyles } from '../styled/inputs';

export const IntroWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

export const SearchForm = styled.form`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.large};
  padding-bottom: ${({ isLoading }) => isLoading && '37px'};
  border-bottom: 1px solid ${({ theme }) => theme.palette.offWhite};
`;

export const Results = styled.div`
  margin: ${({ theme }) => theme.spacing.large} 0;
  border-bottom: ${({ isLoading, theme }) =>
    isLoading && `1px solid ${theme.palette.offWhite}`};
`;

export const ResultsList = styled.ul`
  padding: 0;
  list-style: none;
  font-size: ${({ theme }) => theme.fontsize.larger};

  small {
    font-size: ${({ theme }) => theme.fontsize.standard};
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  max-width: 75%;
`;

export const SearchInput = styled.input`
  ${inputStyles}
  width: 100%;
  margin-right: 5px;
  background-color: ${({ theme }) => theme.palette.white};
  border: 1px solid ${({ theme }) => theme.palette.grey10};

  ${breakpoint.desktop`
      min-width: 185px;
  `}
`;

export const SearchButton = styled.button`
  ${buttonReset}
  ${buttonStyles};
  min-width: 30%;
`;

export const StatusMessage = styled.div`
  display: block;
  margin: ${({ theme }) => theme.spacing.small} 0;
  color: ${({ theme }) => theme.palette.primary};

  p {
    margin: 0;
  }
`;

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
`;

export const SpinnerSVG = styled(SVG)`
  svg {
    width: 25px;
    height: 25px;
    animation: ${rotate} 2s linear infinite;

    .path {
      stroke: ${({ theme }) => theme.palette.primary};
      stroke-linecap: round;
      animation: ${dash} 1.5s ease-in-out infinite;
    }
  }
`;
