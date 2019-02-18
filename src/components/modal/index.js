import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import { defaultStyles, StyledCloseButton } from './styles';

/**
 * A version of react-modal that is styled with our custom styles
 */
function Modal({ children, isOpen, onRequestClose, ...otherProps }) {
  return (
    <ReactModal
      onRequestClose={onRequestClose}
      isOpen={isOpen}
      {...otherProps}
      style={defaultStyles}
      aria={{
        modal: true,
      }}
    >
      <StyledCloseButton title="Close" onClick={onRequestClose}>
        ✕
      </StyledCloseButton>
      {children}
    </ReactModal>
  );
}

Modal.propTypes = {
  children: PropTypes.object,
  onRequestClose: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default Modal;
