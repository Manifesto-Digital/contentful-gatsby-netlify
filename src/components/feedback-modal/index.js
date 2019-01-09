import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../modal';
import LinkButton from '../link-button';
import FeedbackForm from '../feedback-form';

export default function FeedbackModal(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <LinkButton
        bg="donate"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        {props.linkText}
      </LinkButton>
      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        <FeedbackForm heading={props.heading} />
      </Modal>
    </>
  );
}

FeedbackModal.propTypes = {
  linkText: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
};
