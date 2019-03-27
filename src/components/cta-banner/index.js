import React from 'react';
import PropTypes from 'prop-types';
import { consistentString } from '../../utils/content-formatting';
// Components
import CTA from '../cta';
// Styles
import { Container } from '../styled/containers';
import { Banner, Header } from './styles';

const CTABanner = ({
  cta,
  headerText,
  bannerColour,
  removeMarginBottom,
  sidebar,
}) => (
  <Banner
    bannerColour={consistentString(bannerColour)}
    removeMarginBottom={removeMarginBottom}
    sidebar={sidebar}
  >
    <Container>
      <Header bannerColour={consistentString(bannerColour)}>
        {headerText}
      </Header>
      <CTA {...CTA.fromCMS(cta)} />
    </Container>
  </Banner>
);

CTABanner.propTypes = {
  cta: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  headerText: PropTypes.string.isRequired,
  bannerColour: PropTypes.oneOf(['Red', 'San Marino Blue', 'Black']).isRequired,
  removeMarginBottom: PropTypes.bool,
  sidebar: PropTypes.bool,
};

export default CTABanner;
