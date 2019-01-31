import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import { defaultStyles, StyledCloseButton } from './styles';

/**
 * A version of react-modal that is styled with our custom styles
 */
function Modal({ children, ...otherProps }) {
  return (
    <ReactModal
      {...otherProps}
      style={defaultStyles}
      aria={{
        modal: true,
      }}
    >
      <StyledCloseButton title="Close" onClick={otherProps.onRequestClose}>
        ✕
      </StyledCloseButton>
      {children}
    </ReactModal>
  );
}

Modal.propTypes = {
  children: PropTypes.func,
};

export default Modal;
