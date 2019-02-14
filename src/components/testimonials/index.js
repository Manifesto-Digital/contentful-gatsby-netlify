import React from 'react';
import PropTypes from 'prop-types';
import Testimonial from './testimonial';
import { Container } from '../styled/containers';
import { ModuleWrapper } from './styles';

const Testimonials = ({ data, insideContainer }) => {
  const { headerText, testimonials } = data;

  if (testimonials === null || testimonials.length === 0) {
    return null;
  }

  return (
    <ModuleWrapper>
      <Container padding={!insideContainer}>
        <h2>{headerText}</h2>

        {testimonials.map((testimonial, i) => (
          <Testimonial data={testimonial} loopIndex={i} key={i} />
        ))}
      </Container>
    </ModuleWrapper>
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
