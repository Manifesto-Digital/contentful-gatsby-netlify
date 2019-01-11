import styled from 'styled-components';
import theme from '../theme/variables';
import { buttonReset } from '../styled/buttons';

export const defaultStyles = {
  overlay: {
    backgroundColor: theme.palette.overlay,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    position: 'relative',
    top: undefined,
    left: undefined,
    right: undefined,
    borderRadius: 'none',
    padding: theme.spacing.large,
    border: undefined,
    backgroundColor: theme.palette.offWhite,
  },
};

export const StyledCloseButton = styled.button`
  ${buttonReset};
  line-height: 1;
  padding: ${props => props.theme.spacing.small};
  position: absolute;
  right: 0;
  top: 0;
`;
