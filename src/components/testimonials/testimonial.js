import React from 'react';
import PropTypes from 'prop-types';
import ResponsiveImage from '../image/responsive';
import RichText from '../rich-text';
import { Wrapper, ImageWrapper, TextWrapper, Author } from './styles';

const Testimonial = ({ data, loopIndex }) => {
  const { image, text, author, backgroundColour } = data;

  return (
    <Wrapper>
      <ImageWrapper loopIndex={loopIndex}>
        <ResponsiveImage image={image} mobileW={550} desktopW={550} />
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
