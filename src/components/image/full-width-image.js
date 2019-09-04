import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '../styled/containers';
import { Wrapper } from './styles';

const FullWidthImage = ({ data, insideContainer, sidebar }) => (
  <>
    {data.imageHeader && (
      <Container padding={!insideContainer}>
        <h2>{data.imageHeader}</h2>
      </Container>
    )}
    <Wrapper
      mobileW={600}
      desktopW={1800}
      removeMarginBottom={data.removeMarginBottom}
      image={data.image}
      noStretch={sidebar}
    />
  </>
);

FullWidthImage.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
    removeMarginBottom: PropTypes.bool,
  }),
  insideContainer: PropTypes.bool,
  sidebar: PropTypes.bool,
};

FullWidthImage.defaultProps = {
  insideContainer: false,
  sidebar: false,
};

export default FullWidthImage;
