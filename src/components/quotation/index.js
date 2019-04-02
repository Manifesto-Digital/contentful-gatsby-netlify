import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '../styled/containers';
import {
  Wrapper,
  Flex,
  Blockquote,
  QuoteImage,
  ImageWithoutQuote,
  QuoteMark,
} from './styles';
import QuoteLeft from '../../assets/svg/icons/quote-left-solid.svg';

const Quotation = ({ quote, insideContainer, image }) => (
  <Wrapper>
    <Container padding={!insideContainer}>
      {(image && quote && (
        <Flex>
          <QuoteImage image={image} width={600} />
          <Blockquote>
            <QuoteMark src={QuoteLeft} />
            {quote}
          </Blockquote>
        </Flex>
      )) ||
        (image && <ImageWithoutQuote image={image} width={600} />)}
    </Container>
  </Wrapper>
);
Quotation.propTypes = {
  quote: PropTypes.string,
  insideContainer: PropTypes.bool,
  image: PropTypes.object,
};

Quotation.defaultProps = {
  insideContainer: false,
};
export default Quotation;
