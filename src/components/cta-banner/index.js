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
  insideContainer,
}) => (
    <Banner
      bannerColour={consistentString(bannerColour)}
      removeMarginBottom={removeMarginBottom}
      sidebar={sidebar}
    >
      <Container padding={!insideContainer}>
        <Header bannerColour={consistentString(bannerColour)}>
          {headerText}
        </Header>
        <CTA className="tracking-banner-cta" {...CTA.fromCMS(cta)} />
      </Container>
    </Banner>
  );

CTABanner.propTypes = {
  cta: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  headerText: PropTypes.string.isRequired,
  bannerColour: PropTypes.oneOf(['Red', 'San Marino Blue', 'Black']).isRequired,
  removeMarginBottom: PropTypes.bool,
  sidebar: PropTypes.bool,
  insideContainer: PropTypes.bool,
};
CTABanner.defaultProps = {
  insideContainer: false,
};

export default CTABanner;
