import React from 'react';
import ReactModal from 'react-modal';
import { defaultStyles, StyledCloseButton } from './styles';

/**
 * A version of react-modal that is styled with our custom styles
 */
export default function Modal({ children, ...otherProps }) {
  return (
    <ReactModal {...otherProps} style={defaultStyles}>
      <StyledCloseButton title="Close" onClick={otherProps.onRequestClose}>
        ✕
      </StyledCloseButton>
      {children}
    </ReactModal>
  );
}
