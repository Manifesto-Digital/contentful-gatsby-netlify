import React from 'react';
import PropTypes from 'prop-types';
// Components
import { Container } from '../styled/containers';
import { H1 } from './styles.js';

const PageTitle = ({ title }) => (
  <Container>
    <H1>{title}</H1>
  </Container>
);

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;
