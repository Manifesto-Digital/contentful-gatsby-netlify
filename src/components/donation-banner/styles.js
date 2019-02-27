import styled from 'styled-components';
import { breakpoint } from '../theme/breakpoint';
import DonationFormHandler from '../donation-form-handler';
import Button from '../button';

export const Banner = styled.section`
  padding: ${({ theme }) => theme.spacing.standard} 0;
  background-color: ${({ theme }) => theme.palette.donate};
  margin-bottom: ${({ removeMarginBottom, theme }) =>
    removeMarginBottom ? '0' : theme.spacing.large};
`;

export const Wrapper = styled.section`
  ${breakpoint.tablet`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `};
`;

export const Header = styled.h3`
  color: ${({ theme }) => theme.palette.white};
  margin-bottom: ${({ theme }) => theme.spacing.standard};

  ${breakpoint.tablet`
    flex: 0 1 50%;
    margin-bottom: 0;
  `};
`;

export const StyledDonationFormHandler = styled(DonationFormHandler)`
  ${breakpoint.tablet`
    flex: 0 1 40%;
    margin-bottom: 0;
    justify-content: flex-end;
  `};
`;

export const StyledButton = styled(Button)`
  margin-left: ${({ theme }) => theme.spacing.small};
`;
