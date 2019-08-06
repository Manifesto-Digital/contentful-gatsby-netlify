import React from 'react';
import PropTypes from 'prop-types';
import { AccordionsWrapper } from './styles';
import { Container } from '../styled/containers';
import Accordion from '.';
import RichText from '../rich-text';

function Accordions({ data, insideContainer }) {
  const { accordions } = data;
  if (!accordions) return null;
  return (
    <AccordionsWrapper>
      <Container padding={!insideContainer}>
        {accordions.map((accordion, i) => (
          <Accordion header={accordion.heading} key={i} order={i + 1}>
            <RichText richText={accordion.content} />
          </Accordion>
        ))}
      </Container>
    </AccordionsWrapper>
  );
}
Accordions.propTypes = {
  data: PropTypes.shape({
    accordions: PropTypes.array,
    title: PropTypes.string,
  }),
  insideContainer: PropTypes.bool,
};

Accordions.defaultProps = {
  insideContainer: false,
};

export default Accordions;
