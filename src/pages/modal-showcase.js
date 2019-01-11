import React from 'react';
import FeedbackModal from '../components/feedback-modal';
import Layout from '../components/layout';

const ModalTest = () => (
  <Layout>
    <FeedbackModal
      linkText="Tell us what you think of this page"
      heading="Was this advice helpful?"
    />
  </Layout>
);

export default ModalTest;
