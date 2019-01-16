import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../modal';
import LinkButton from '../link-button';
import FeedbackForm from '../feedback-form';
import { Wrapper } from './styles';

const FeedbackModal = ({ heading, linkText }) => {
  const [isOpen, setIsOpen] = useState(false);
  const defaultText = linkText || 'Tell us what you think of this page ';
  const defaultHeading = heading || 'Was this advice helpful?';
  return (
    <Wrapper>
      <LinkButton
        bg="donate"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        {defaultText}
      </LinkButton>
      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        <FeedbackForm heading={defaultHeading} />
      </Modal>
    </Wrapper>
  );
};

FeedbackModal.propTypes = {
  linkText: PropTypes.string,
  heading: PropTypes.string,
};

export default FeedbackModal;
