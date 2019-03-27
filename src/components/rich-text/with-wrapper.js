import React from 'react';
import PropTypes from 'prop-types';
import RichText from '.';
import { Container } from '../styled/containers';
import { ModuleWrapper } from './styles';

const RichTextWithWrapper = ({ richText, className }) => (
  <ModuleWrapper className={className}>
    <Container>
      <RichText richText={richText} />
    </Container>
  </ModuleWrapper>
);

RichTextWithWrapper.propTypes = {
  richText: PropTypes.shape({
    childContentfulRichText: PropTypes.shape({
      html: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  className: PropTypes.string,
};

export default RichTextWithWrapper;
