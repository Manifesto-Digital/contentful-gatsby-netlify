import styled from 'styled-components';
import { breakpoint } from '../../theme/breakpoint';
import { buttonStyles } from '../../styled/buttons';
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
