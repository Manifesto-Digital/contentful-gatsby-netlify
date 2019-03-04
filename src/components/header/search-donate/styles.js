import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import { breakpoint } from '../../theme/breakpoint';
import { buttonReset, buttonStyles } from '../../styled/buttons';
import { inputStyles } from '../../styled/inputs';
import LinkHandler from '../../link-handler';

export const InputWrap = styled.div`
  display: flex;
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
  margin-right: 1px;
  background-color: ${({ theme }) => theme.palette.white};
  border: 0;

  ${breakpoint.desktop`
      min-width: 185px;
  `}
`;

export const SearchButton = styled.button`
  ${buttonReset}
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing.small};
  background-color: ${({ theme }) => theme.palette.white};
`;

export const SearchIcon = styled(SVG)`
  display: block;
  width: 18px;
  fill: ${({ theme }) => theme.palette.royalBlue};
`;

export const DonateButton = styled(LinkHandler)`
  ${buttonStyles};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${({ MobileMenu, theme }) => MobileMenu && theme.spacing.small};
  text-decoration: none;
  ${breakpoint.desktop`
    display: ${({ MobileMenu }) => (MobileMenu ? 'none' : 'flex')};
  `}

  &:hover {
    color: ${({ theme }) => theme.palette.white};
  }
`;

export const Wrapper = styled.form`
  display: ${({ resolution }) => (resolution === 'desktop' ? 'none' : 'flex')};

  ${breakpoint.desktop`
      display: ${({ resolution }) =>
        resolution === 'desktop' ? 'flex' : 'none'};
  `}

  ${DonateButton} {
    display: ${({ resolution }) => (resolution === 'mobile' ? 'none' : 'flex')};
  }

  height: 43px;
`;
