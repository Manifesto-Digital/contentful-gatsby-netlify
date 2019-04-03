import styled from 'styled-components';
import { breakpoint } from '../../theme/breakpoint';
import { buttonStyles, buttonReset } from '../../styled/buttons';
import LinkHandler from '../../link-handler';

export const LegalDonateButton = styled(LinkHandler)`
  ${buttonStyles};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${({ mobileMenu, theme }) => mobileMenu && theme.spacing.small};
  text-decoration: none;

  ${breakpoint.desktop`
    height: 100%;
  `};

  &:hover {
    color: ${({ theme }) => theme.palette.white};
  }
`;

export const SecondHeaderWrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.grey25};
  padding: ${({ theme }) => theme.spacing.small} 0;
`;

export const SecondHeaderBar = styled.div`
  display: flex;
`;

export const SubsectionHeader = styled.h3`
  margin-right: ${({ theme }) => theme.spacing.large};
  margin-bottom: 0;
  font-weight: normal;
`;

export const LegalItem = styled.li`
  display: flex;
  align-items: center;
  margin: 0 ${({ theme }) => theme.spacing.standard} 0 0;
  font-size: ${({ theme }) => theme.fontsize.small};
`;

export const MoreItemMenu = styled.button`
  ${buttonReset};
  font-size: ${({ theme }) => theme.fontsize.small};
`;
