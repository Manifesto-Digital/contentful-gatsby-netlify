import React from 'react';
import PropTypes from 'prop-types';
import { consistentString } from '../../utils/content-formatting';
// Components
import iconSrc from '../../utils/iconSrc';
// Styles
import { InlineBanner, TextWrapper, BannerSVG } from './styles';
import { Container } from '../styled/containers';

const InlineCallOut = ({
  icon,
  insideContainer,
  forwardedRef,
  borderColour,
  bannerColour,
  children,
  removeMarginBottom,
}) => (
  <Container padding={!insideContainer} ref={forwardedRef}>
    <InlineBanner
      borderColour={consistentString(borderColour)}
      bannerColour={consistentString(bannerColour)}
      removeMarginBottom={removeMarginBottom}
    >
      {icon && <BannerSVG src={iconSrc(icon)} cacheGetRequests />}
      <TextWrapper>{children}</TextWrapper>
    </InlineBanner>
  </Container>
);

InlineCallOut.fromCMS = ({
  borderColour,
  ctaColour,
  bannerColour,
  icon,
  removeMarginBottom,
}) => ({
  borderColour,
  ctaColour,
  bannerColour,
  icon,
  removeMarginBottom,
});

InlineCallOut.propTypes = {
  icon: PropTypes.string,
  borderColour: PropTypes.string,
  bannerColour: PropTypes.string,
  insideContainer: PropTypes.bool,
  forwardedRef: PropTypes.object,
  children: PropTypes.any,
  removeMarginBottom: PropTypes.bool,
};

InlineCallOut.defaultProps = {
  insideContainer: false,
  removeMarginBottom: false,
};

export default InlineCallOut;
