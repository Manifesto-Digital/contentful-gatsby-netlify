import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '../styled/containers';

const Testimonials = ({ data }) => {
  const { headerText, testimonials } = data;

  return (
    <Container>
      <h2>{headerText}</h2>
    </Container>
  );
};

Testimonials.propTypes = {
  data: PropTypes.shape({
    headerText: PropTypes.string.isRequired,
  }),
};

export default Testimonials;
