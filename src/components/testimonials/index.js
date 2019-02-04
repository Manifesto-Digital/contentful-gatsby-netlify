import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '../styled/containers';
import Testimonial from './testimonial';

const Testimonials = ({ data, insideContainer }) => {
  const { headerText, testimonials } = data;

  return (
    <Container padding={!insideContainer}>
      <h2>{headerText}</h2>

      {testimonials.map((testimonial, i) => (
        <Testimonial data={testimonial} key={i} />
      ))}
    </Container>
  );
};

Testimonials.propTypes = {
  data: PropTypes.shape({
    headerText: PropTypes.string.isRequired,
    testimonials: PropTypes.array.isRequired,
  }),
  insideContainer: PropTypes.bool,
};

export default Testimonials;
