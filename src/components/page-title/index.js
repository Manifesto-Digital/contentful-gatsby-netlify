import React from 'react';
import PropTypes from 'prop-types';
// Components
import { Container, TwoThirds } from '../styled/containers';
import { Wrapper } from './styles.js';

const PageTitle = ({ children, twoThirds, paddingBottom }) => (
  <Wrapper paddingBottom={paddingBottom}>
    {twoThirds ? (
      <Container>
        <TwoThirds>{children}</TwoThirds>
      </Container>
    ) : (
      <Container>{children}</Container>
    )}
  </Wrapper>
);

PageTitle.propTypes = {
  children: PropTypes.object.isRequired,
  twoThirds: PropTypes.bool,
  paddingBottom: PropTypes.bool,
};

PageTitle.defaultProps = {
  paddingBottom: false,
};

export default PageTitle;
