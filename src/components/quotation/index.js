import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '../styled/containers';
import { Wrapper, Flex, Blockquote, QuoteImage, QuoteMark } from './styles';
import QuoteLeft from '../../assets/svg/icons/quote-left-solid.svg';

const QuotationWithImage = ({ quote, insideContainer, image }) => (
  <Wrapper>
    <Container padding={!insideContainer}>
      <Flex>
        {image && <QuoteImage image={image} width={600} />}
        <Blockquote>
          <QuoteMark src={QuoteLeft} />
          {quote}
        </Blockquote>
      </Flex>
    </Container>
  </Wrapper>
);
QuotationWithImage.propTypes = {
  quote: PropTypes.string.isRequired,
  insideContainer: PropTypes.bool,
  image: PropTypes.object.isRequired,
};

QuotationWithImage.defaultProps = {
  insideContainer: false,
};
export default QuotationWithImage;
