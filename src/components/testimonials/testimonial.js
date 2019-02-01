import React from 'react';
import PropTypes from 'prop-types';
import Image from '../image';
import RichText from '../rich-text';
import { Container, ImageContainer, TextContainer, Author } from './styles';

const Testimonial = ({ id, data }) => {
  const { image, text, author, boxBackground } = data;

  return (
    <Container>
      <ImageContainer order={id % 2 === 0 ? 0 : 2}>
        <Image image={image} />
      </ImageContainer>
      <TextContainer
        bg={boxBackground}
        translate={id % 2 === 0 ? 'translateX(-2em)' : 'translateX(2em)'}
      >
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
