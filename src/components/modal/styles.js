import styled from 'styled-components';
import ReactModalAdapter from './modal-adapter';
import { breakpoint } from '../theme/breakpoint';
import { buttonReset } from '../styled/buttons';

export const StyledCloseButton = styled.button`
  ${buttonReset};
  line-height: 1;
  padding: ${props => props.theme.spacing.small};
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
    background-color: ${props => props.theme.palette.overlay};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__content {
    position: relative;
    top: auto;
    left: auto;
    right: auto;
    background-color: ${props => props.theme.palette.white};
    bottom: auto;
    max-height: calc(100% - ${props => props.theme.spacing.large});
    max-width: calc(100% - ${props => props.theme.spacing.large});
    overflow: scroll;
    padding: ${props => props.theme.spacing.standard};
    z-index: 2;

    ${breakpoint.tablet`
      padding: ${props => props.theme.spacing.large};
    `};
  }
`;
