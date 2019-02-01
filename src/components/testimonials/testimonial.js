import React from 'react';
import PropTypes from 'prop-types';
import Image from '../image';
import RichText from '../rich-text';
import { Container, ImageContainer, TextContainer, Author } from './styles';

const Testimonial = ({ loopIndex, data }) => {
  const { image, text, author, boxBackground } = data;

  console.log(image);
  return (
    <Container>
      <ImageContainer loopIndex={loopIndex}>
        <Image image={image} />
      </ImageContainer>
      <TextContainer bg={boxBackground} loopIndex={loopIndex}>
        <RichText richText={text} />
        <Author>&mdash; {author}</Author>
      </TextContainer>
    </Container>
  );
};

Testimonial.propTypes = {
  loopIndex: PropTypes.number,
  data: PropTypes.shape({
    image: PropTypes.object.isRequired,
    text: PropTypes.object.isRequired,
    author: PropTypes.string,
    boxBackground: PropTypes.oneOf(['White', 'Grey']),
  }),
};

export default Testimonial;
