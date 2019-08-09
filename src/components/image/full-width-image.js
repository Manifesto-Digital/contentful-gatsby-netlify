import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import ResponsiveImage from './responsive';
import { Container } from '../styled/containers';

const Wrapper = styled(ResponsiveImage)`
  width: 100%;
  margin-bottom: ${({ removeMarginBottom, theme }) =>
    removeMarginBottom ? 0 : theme.spacing.large};
`;

const FullWidthImage = ({ data, insideContainer }) => (
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
};

FullWidthImage.defaultProps = {
  insideContainer: false,
};

export default FullWidthImage;
