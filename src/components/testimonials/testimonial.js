import React from 'react';
import PropTypes from 'prop-types';
import Image from '../image';
import RichText from '../rich-text';
import { Wrapper, ImageWrapper, TextWrapper, Author } from './styles';

const Testimonial = ({ key, data }) => {
  const { image, text, author, backgroundColour } = data;

  console.log(image);
  return (
    <Wrapper>
      <ImageWrapper loopIndex={key}>
        <Image image={image} />
      </ImageWrapper>
      <TextWrapper bg={backgroundColour} loopIndex={key}>
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
