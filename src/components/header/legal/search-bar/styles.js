import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import { breakpoint } from '../../../theme/breakpoint';
import { buttonReset } from '../../../styled/buttons';
import { inputStyles } from '../../../styled/inputs';

export const FormWrapper = styled.form`
  display: none;

  ${breakpoint.desktop`
      display: flex;
  `}

  height: 43px;
`;

export const InputWrap = styled.div`
  display: flex;
  position: relative;
  margin-right: 5px;
  font-size: ${({ theme }) => theme.fontsize.small};
  width: 100%;
  margin: 0 ${({ theme }) => theme.spacing.small};
  border: 1px solid ${({ theme }) => theme.palette.grey10};

  ${breakpoint.desktop`
    width: auto;
    border: 0;
  `}
`;

export const SearchInput = styled.input`
  ${inputStyles}
  width: 100%;
  margin-right: ${({ theme }) => theme.spacing.small};
  background-color: ${({ theme }) => theme.palette.white};
  border: 0;
  padding-left: ${({ theme }) => theme.spacing.large};

  ${breakpoint.desktop`
      min-width: 250px;
  `}
`;

export const SearchIcon = styled(SVG)`
  display: block;
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  fill: ${({ theme }) => theme.palette.royalBlue};

  svg {
    display: block;
  }
`;

export const SearchButton = styled.button`
  ${buttonReset}
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing.small};
  color: ${({ theme }) => theme.palette.white};
  background-color: ${({ theme }) => theme.palette.grey80};
`;
