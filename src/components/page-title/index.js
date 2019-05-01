import React from 'react';
import PropTypes from 'prop-types';
// Components
import { Container, TwoThirds } from '../styled/containers';
import { Wrapper } from './styles.js';

const PageTitle = ({
  children,
  twoThirds,
  paddingBottom,
  legal,
  noContainer,
}) => {
  if (noContainer) {
    return <Wrapper>{children}</Wrapper>;
  }
  return (
    <Wrapper paddingBottom={paddingBottom} legal={legal}>
      {twoThirds ? (
        <Container>
          <TwoThirds>{children}</TwoThirds>
        </Container>
      ) : (
        <Container>{children}</Container>
      )}
    </Wrapper>
  );
};

PageTitle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  twoThirds: PropTypes.bool,
  paddingBottom: PropTypes.bool,
  legal: PropTypes.bool,
  noContainer: PropTypes.bool,
};

PageTitle.defaultProps = {
  paddingBottom: false,
};

export default PageTitle;
