import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '../styled/containers';
import Testimonial from './testimonial';

const Testimonials = ({ data }) => {
  const { headerText, testimonials } = data;

  return (
    <Container>
      <h2>{headerText}</h2>
      <>
        {testimonials.map((testimonial, key) => (
          <Testimonial data={testimonial} id={key} />
        ))}
      </>
    </Container>
  );
};

Testimonials.propTypes = {
  data: PropTypes.shape({
    headerText: PropTypes.string.isRequired,
    testimonials: PropTypes.array,
  }),
};

export default Testimonials;
