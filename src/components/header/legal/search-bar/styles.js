import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import { breakpoint } from '../../../theme/breakpoint';
import { buttonReset } from '../../../styled/buttons';
import { inputStyles } from '../../../styled/inputs';

export const FormWrapper = styled.form`
  display: none;
  height: 43px;

  ${breakpoint.desktop`
      display: flex;
  `}
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
  margin-right: 5px;
  background-color: ${({ theme }) => theme.palette.white};
  border: 1px solid ${({ theme }) => theme.palette.black};
  padding-left: ${({ theme }) => theme.spacing.large};

  ${breakpoint.desktop`
      min-width: 320px;
  `}
`;

export const SearchIcon = styled(SVG)`
  display: block;
  position: absolute;
  left: 15px;
  width: 18px;
  top: 50%;
  transform: translateY(-50%);
  fill: ${({ theme }) => theme.palette.grey66};

  svg {
    display: block;
  }
`;

export const SearchButton = styled.button`
  ${buttonReset}
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 18px;
  color: ${({ theme }) => theme.palette.white};
  background-color: ${({ theme }) => theme.palette.grey80};
`;
