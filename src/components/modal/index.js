import React from 'react';
import ReactModal from 'react-modal';
import theme from '../theme/variables';

const defaultStyles = {
  overlay: {
    backgroundColor: 'rgba(43,46,56,.9)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    position: undefined,
    top: undefined,
    left: undefined,
    right: undefined,
    borderRadius: 'none',
    padding: theme.spacing.largePadding,
    border: undefined,
    backgroundColor: theme.palette.offWhite,
  },
};

/**
 * A version of react-modal that is styled with our custom styles
 */
export default function Modal(props) {
  return <ReactModal {...props} style={defaultStyles} />;
}
