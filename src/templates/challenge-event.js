import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { dateAsString } from '../utils/dates';
import Layout from '../components/layout';
import HeroVideo from '../components/hero/hero-video';
import StickyBanner from '../components/challenge-event/sticky-banner';
import Assemblies from '../components/assemblies';

const ChallengeEventPage = ({ data }) => {
  const {
    heroImage,
    bannerButtonText,
    backgroundVideo,
    assemblies,
    pageInformation,
    event,
  } = data.contentfulPageChallengeEvent;

  // Grab the information from the event reference
  const { eventName, displayLocation, distance } = event;
  const date = dateAsString(event.eventSystemDate, 'DD MMM YYYY');

  const bannerText = `${distance ? `${distance}\n` : ''}${
    displayLocation ? `${displayLocation}\n` : ''
  }${date}`;

  const [bannerStuck, setBannerStuck] = useState(false);
  const [animateBanner, setAnimateBanner] = useState(false);
  const [stickyBarPosition, setStickBarPosition] = useState(null);
  const heroBannerRef = useRef(null);
  const stickyBarRef = useRef(null);

  // On resize just remove the stickyBarPosition so it will calculate again on next scroll
  const handleResize = () => {
    setStickBarPosition(null);
  };

  useEffect(() => {
    let resizeTimer;
    window.addEventListener('resize', () => {
      // Simple debounce
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        handleResize();
      }, 200);
    });
    // Specify how to clean up after this effect:
    return function cleanup() {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize, stickyBarPosition]);

  useEffect(() => {
    // Store last scroll to detect direction for animation reasons
    let lastScroll;

    const handleStickyBarScroll = () => {
      const scrollPosition =
        window.pageYOffset !== undefined
          ? window.pageYOffset
          : (
              document.documentElement ||
              document.body.parentNode ||
              document.body
            ).scrollTop;

      // Store the original position of the banner so we can un-stick when would have been visible
      if (!stickyBarPosition) {
        setStickBarPosition(
          stickyBarRef.current.offsetTop + stickyBarRef.current.offsetHeight
        );
      }

      const middleOfHeroBanner =
        heroBannerRef.current.getBoundingClientRect().top +
        scrollPosition +
        heroBannerRef.current.offsetHeight / 2;

      const windowHeight = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0
      );
      const bottomOfScreen = windowHeight + scrollPosition;
      const bannerWouldBeVisible = bottomOfScreen >= stickyBarPosition;

      if (bannerStuck) {
        if (!animateBanner) setAnimateBanner(false);

        // If scroll is above hero then dont fix banner
        if (scrollPosition < middleOfHeroBanner || bannerWouldBeVisible) {
          setBannerStuck(false);
        }
      } else if (scrollPosition > middleOfHeroBanner && !bannerWouldBeVisible) {
        if (lastScroll < scrollPosition) {
          setAnimateBanner(true);
        }
        setBannerStuck(true);
      }
      lastScroll = scrollPosition;
    };

    window.addEventListener('scroll', handleStickyBarScroll, true);
    // Specify how to clean up after this effect:
    return function cleanup() {
      window.removeEventListener('scroll', handleStickyBarScroll);
    };
  }, [stickyBarPosition, bannerStuck, animateBanner]);

  return (
    <Layout
      pageInformation={pageInformation}
      pageTitle={eventName}
      removeFooterMargin
    >
      <HeroVideo
        title={eventName}
        subtitle={displayLocation}
        video={backgroundVideo}
        bannerText={bannerText}
        buttonText={bannerButtonText}
        image={heroImage}
        eventLink={event.link}
        heroBannerRef={heroBannerRef}
      />
      <Assemblies assemblies={assemblies} />
      <StickyBanner
        title={eventName}
        subtitle={displayLocation}
        eventLink={event.link}
        bannerText={bannerText}
        buttonText={bannerButtonText}
        stickyBarRef={stickyBarRef}
        bannerStuck={bannerStuck}
        animateBanner={animateBanner}
      />
    </Layout>
  );
};

ChallengeEventPage.propTypes = {
  data: PropTypes.shape({
    contentfulPageAssemblyChallengeEventPage: PropTypes.object,
  }),
};

export default ChallengeEventPage;

export const challengeEventPageQuery = graphql`
  query challengeEventPageQuery($slug: String!) {
    contentfulPageChallengeEvent(slug: { eq: $slug }) {
      heroImage {
        ...ImageFragment
      }
      backgroundVideo {
        file {
          url
        }
      }
      event {
        ...EventFragment
      }
      bannerButtonText
      pageInformation {
        ...PageInformationFragment
      }
      assemblies {
        ... on Node {
          ...PerksListFragment
          ...TestimonialsAssemblyFragment
          ...TwoColumnTextAndImageBlockFragment
          ...CardsWithIconsFragment
          ...CtaAssemblyFragment
          ...DownloadBannerAssemblyFragment
          ...AssemblyFormFragment
          ...TestimonialsAssemblyFragment
          ...ContentGrid4Fragment
          ...DonationBanner
          ...GoogleMapFragment
          ...InlineCallout
          ...LinkBoxFragment
          ...ShareBlockFragment
          ...StatsFragment
          ...TwoColumnTextAndImageBlockFragment
        }
      }
    }
  }
`;
