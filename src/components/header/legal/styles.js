import styled from 'styled-components';
import { breakpoint } from '../../theme/breakpoint';
import { buttonStyles, buttonReset } from '../../styled/buttons';
import { ItemLink } from '../navigation/styles.js';
import LinkHandler from '../../link-handler';

export const LegalDonateButton = styled(LinkHandler)`
  ${buttonStyles};
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;

  ${breakpoint.desktop`
    height: 100%;
    display: ${({ mobileOnly }) => mobileOnly && 'none'};
  `};

  &:hover {
    color: ${({ theme }) => theme.palette.white};
  }
`;

export const LegalMenuList = styled.ul`
  display: flex;
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const SecondHeaderWrapper = styled.div`
  display: none;
  padding: ${({ theme }) => theme.spacing.small} 0;
  background-color: ${({ theme }) => theme.palette.grey15};

  ${breakpoint.desktop`
    display: block;
  `};
`;

export const SecondHeaderBar = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: ${({ theme }) => theme.spacing.small};

  ${ItemLink} {
    font-weight: bold;
  }
`;

export const SubsectionHeader = styled.h3`
  flex-shrink: 0;
  margin-right: ${({ theme }) => theme.spacing.large};
  margin-bottom: 0;
  font-weight: normal;
`;

export const LegalItem = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  margin: 0 ${({ theme }) => theme.spacing.standard} 0 0;
  font-size: ${({ theme }) => theme.fontsize.small};
`;

export const MoreItemMenu = styled.button`
  ${buttonReset};
  font-size: ${({ theme }) => theme.fontsize.small};
`;

export const ThirdNavigationBar = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.palette.grey15};

  padding: ${({ theme }) => theme.spacing.small} 0;
  margin-top: ${({ theme }) => theme.spacing.small};

  a {
    font-weight: normal;
  }
`;

/* Currently only displays on desktop */
export const MoreSubMenu = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: calc(100% + ${({ theme }) => theme.spacing.standard});
  right: 0;
  margin: 0;
  min-width: 225px;
  padding: ${({ theme }) => theme.spacing.standard};
  border: none;
  list-style: none;
  background: ${({ theme }) => theme.palette.grey15};

  ${LegalItem} {
    margin-bottom: ${({ theme }) => theme.spacing.standard};
    &:last-child {
      border: none;
      margin-bottom: 0;
    }
  }
`;
