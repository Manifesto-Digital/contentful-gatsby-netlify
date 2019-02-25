import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

/**
 * A version of react-modal that is styled with our custom styles
 * Gives us the ability to use media queries in the styles
 */
function ReactModalAdapter({
  children,
  isOpen,
  className,
  onRequestClose,
  ...otherProps
}) {
  const contentClassName = `${className}__content`;
  const overlayClassName = `${className}__overlay`;
  return (
    <ReactModal
      onRequestClose={onRequestClose}
      isOpen={isOpen}
      aria={{
        modal: true,
      }}
      className={contentClassName}
      portalClassName={className}
      overlayClassName={overlayClassName}
      {...otherProps}
    >
      {children}
    </ReactModal>
  );
}

ReactModalAdapter.propTypes = {
  children: PropTypes.array,
  onRequestClose: PropTypes.func,
  isOpen: PropTypes.bool,
  className: PropTypes.string,
};

export default ReactModalAdapter;
