import React from 'react';
import PropTypes from 'prop-types';
// Styles
import { Banner, BannerToStick, ContentContainer, EventName } from './styles';
import { SignUpLink } from '../../styled/buttons';

/**
 * As banner needs to live as part of the normal DOM flow and also
 * be fixed at certain points, two banners rendered to avoid page jump
 */
const StickyBanner = ({
  bannerStuck,
  title,
  subtitle,
  eventLink,
  buttonText,
  stickyBarRef,
  animateBanner,
}) => (
  <>
    <Banner ref={stickyBarRef} animateBanner={animateBanner}>
      <ContentContainer>
        <EventName>
          <strong>{title}</strong>
          <br />
          {subtitle}
        </EventName>
        <SignUpLink link={eventLink}>{buttonText}</SignUpLink>
      </ContentContainer>
    </Banner>
    <BannerToStick bannerStuck={bannerStuck} animateBanner={animateBanner}>
      <ContentContainer>
        <EventName>
          <strong>{title}</strong>
          <br />
          {subtitle}
        </EventName>
        <SignUpLink link={eventLink}>{buttonText}</SignUpLink>
      </ContentContainer>
    </BannerToStick>
  </>
);

StickyBanner.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  bannerStuck: PropTypes.bool,
  animateBanner: PropTypes.bool,
  eventLink: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  buttonText: PropTypes.string,
  stickyBarRef: PropTypes.object,
};

export default StickyBanner;
