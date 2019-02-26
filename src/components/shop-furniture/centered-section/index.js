import React from 'react';
import PropTypes from 'prop-types';
import { richTextPropTypes } from '../../../prop-types';
import RichText from '../../rich-text';
// Styles
import { Wrapper, Content, Red } from './styles';
import { Container } from '../../styled/containers';

const CenteredSection = ({ header, text, contactNumber }) => (
  <Wrapper>
    <Container>
      <Content>
        <h2>{header}</h2>
        <RichText richText={text} />
        <p>
          Call us on: <Red>{contactNumber}</Red>
        </p>
      </Content>
    </Container>
  </Wrapper>
);

CenteredSection.propTypes = {
  header: PropTypes.string.isRequired,
  text: PropTypes.shape(richTextPropTypes).isRequired,
  contactNumber: PropTypes.string.isRequired,
};

export default CenteredSection;
