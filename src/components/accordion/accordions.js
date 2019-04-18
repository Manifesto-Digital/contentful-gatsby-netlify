import React from 'react';
import PropTypes from 'prop-types';
import { AccordionsWrapper } from './styles';
import { Container } from '../styled/containers';
import Accordion from '.';
import RichText from '../rich-text';

function Accordions({ data }) {
  const { accordions } = data;
  if (!accordions) return null;

  return (
    <AccordionsWrapper>
      <Container>
        {accordions.map((accordion, i) => (
          <Accordion header={accordion.heading} key={i}>
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
};

export default Accordions;
