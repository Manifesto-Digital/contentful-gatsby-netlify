import React from 'react';
import PropTypes from 'prop-types';
import Image from '../image';
import RichText from '../rich-text';
import { Container, TextContainer, Author } from './styles';

const Testimonial = ({ id, data }) => {
  const { image, text, author, boxBackground } = data;

  return (
    <Container>
      <Image image={image} />
      <TextContainer bg={boxBackground}>
        <RichText richText={text} />
        <Author>&mdash; {author}</Author>
      </TextContainer>
    </Container>
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
