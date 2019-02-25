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
}) => (
  <Container padding={!insideContainer} ref={forwardedRef}>
    <InlineBanner
      borderColour={consistentString(borderColour)}
      bannerColour={consistentString(bannerColour)}
    >
      {icon && <BannerSVG src={iconSrc(icon)} cacheGetRequests />}
      <TextWrapper>{children}</TextWrapper>
    </InlineBanner>
  </Container>
);

InlineCallOut.propTypes = {
  icon: PropTypes.string,
  borderColour: PropTypes.string,
  bannerColour: PropTypes.string,
  insideContainer: PropTypes.bool,
  forwardedRef: PropTypes.object,
  children: PropTypes.any,
};

InlineCallOut.defaultProps = {
  insideContainer: false,
};

export default InlineCallOut;
