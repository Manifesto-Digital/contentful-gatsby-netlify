import React from 'react';
import PropTypes from 'prop-types';
// Components
import { Container, TwoThirds } from '../styled/containers';
import { H1 } from './styles.js';

const PageTitle = ({ title, twoThirds }) => (
  <>
    {twoThirds ? (
      <TwoThirds padding>
        <H1>{title}</H1>
      </TwoThirds>
    ) : (
      <Container>
        <H1>{title}</H1>
      </Container>
    )}
  </>
);

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  twoThirds: PropTypes.bool,
};

export default PageTitle;
