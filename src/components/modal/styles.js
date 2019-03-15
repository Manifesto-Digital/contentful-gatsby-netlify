import styled from 'styled-components';
import ReactModalAdapter from './modal-adapter';
import { breakpoint } from '../theme/breakpoint';
import { buttonReset } from '../styled/buttons';

export const StyledCloseButton = styled.button`
  ${buttonReset};
  line-height: 1;
  padding: ${({ theme }) => theme.spacing.small};
  position: absolute;
  right: 0;
  top: 0;
`;

export const StyledModal = styled(ReactModalAdapter)`
  &__overlay {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: ${({ theme }) => theme.palette.overlay};
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }

  &__content {
    position: relative;
    top: auto;
    left: auto;
    right: auto;
    background-color: ${({ theme }) => theme.palette.white};
    bottom: auto;
    max-height: calc(100% - ${({ theme }) => theme.spacing.large});
    max-width: calc(100% - ${({ theme }) => theme.spacing.large});
    overflow: scroll;
    padding: ${({ theme }) => theme.spacing.standard};
    z-index: 2;

    ${breakpoint.tablet`
      padding: ${({ theme }) => theme.spacing.large};
    `};
  }
`;
