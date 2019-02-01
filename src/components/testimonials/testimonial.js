import React from 'react';
import PropTypes from 'prop-types';
import Image from '../image';
import RichText from '../rich-text';
import {
  TestimonialContainer,
  TestimonialTextContainer,
  TestimonialAuthor,
} from './styles';

const Testimonial = ({ id, data }) => {
  const { image, text, author, boxBackground } = data;

  return (
    <TestimonialContainer>
      <Image image={image} />
      <TestimonialTextContainer bg={boxBackground}>
        <RichText richText={text} />
        <TestimonialAuthor>&mdash; {author}</TestimonialAuthor>
      </TestimonialTextContainer>
    </TestimonialContainer>
  );
};

Testimonial.propTypes = {
  id: PropTypes.number,
  data: PropTypes.shape({
    image: PropTypes.object.isRequired,
    text: PropTypes.object.isRequired,
    author: PropTypes.string,
  }),
};

export default Testimonial;
