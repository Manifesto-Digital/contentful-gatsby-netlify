import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../modal';
import LinkButton from '../link-button';
import FeedbackForm from '../feedback-form';

const FeedbackModal = ({ heading, linkText }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <LinkButton
        bg="donate"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        {linkText}
      </LinkButton>
      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        <FeedbackForm heading={heading} />
      </Modal>
    </>
  );
};

FeedbackModal.propTypes = {
  linkText: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
};

export default FeedbackModal;
