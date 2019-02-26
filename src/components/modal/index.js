import React from 'react';
import PropTypes from 'prop-types';
// Styles
import { StyledModal, StyledCloseButton } from './styles';
/**
 * A version of react-modal that is styled with our custom styles
 */
function Modal({
  children,
  isOpen,
  modalClassName,
  className,
  onRequestClose,
  ...otherProps
}) {
  return (
    <StyledModal
      onRequestClose={onRequestClose}
      isOpen={isOpen}
      aria={{
        modal: true,
      }}
      className={modalClassName}
      portalClassName={className}
      {...otherProps}
    >
      <StyledCloseButton title="Close" onClick={onRequestClose}>
        ✕
      </StyledCloseButton>
      {children}
    </StyledModal>
  );
}

Modal.propTypes = {
  children: PropTypes.object,
  onRequestClose: PropTypes.func,
  isOpen: PropTypes.bool,
  modalClassName: PropTypes.string,
  className: PropTypes.string,
};

export default Modal;
