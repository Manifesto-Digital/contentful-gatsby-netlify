import React from 'react';
import PropTypes from 'prop-types';
// Components
import CTA from '../cta';
// Styles
import { Container } from '../styled/containers';
import { Banner, Header } from './styles';

const CTABanner = ({ cta, headerText, bannerColour, removeMarginBottom }) => (
  <Banner
    bannerColour={bannerColour.toLowerCase()}
    removeMarginBottom={removeMarginBottom}
  >
    {console.log(cta)}
    <Container>
      <Header bannerColour={bannerColour.toLowerCase()}>{headerText}</Header>
      <CTA {...CTA.fromCMS(cta)} />
    </Container>
  </Banner>
);

CTABanner.propTypes = {
  cta: PropTypes.object.isRequired,
  headerText: PropTypes.string.isRequired,
  bannerColour: PropTypes.oneOf(['Red', 'San Marino Blue', 'Black']).isRequired,
  removeMarginBottom: PropTypes.bool,
};

export default CTABanner;
