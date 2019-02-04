import React from 'react';
import PropTypes from 'prop-types';
import Image from '../image';
import RichText from '../rich-text';
import { Wrapper, ImageWrapper, TextWrapper, Author } from './styles';

const Testimonial = ({ data, loopIndex }) => {
  const { image, text, author, backgroundColour } = data;

  console.log(loopIndex);

  return (
    <Wrapper>
      <ImageWrapper loopIndex={loopIndex}>
        <Image image={image} />
      </ImageWrapper>
      <TextWrapper bg={backgroundColour} loopIndex={loopIndex}>
        <RichText richText={text} />
        <Author>&mdash; {author}</Author>
      </TextWrapper>
    </Wrapper>
  );
};

Testimonial.propTypes = {
  loopIndex: PropTypes.number,
  data: PropTypes.shape({
    image: PropTypes.object.isRequired,
    text: PropTypes.object.isRequired,
    author: PropTypes.string,
    backgroundColour: PropTypes.oneOf(['White', 'Grey']),
  }),
};

export default Testimonial;
