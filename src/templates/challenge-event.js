import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import HeroVideo from '../components/hero/hero-video';
import StickyBanner from '../components/challenge-event/sticky-banner';
import ChallengeEventAssemblies from '../components/assemblies/challenge-event';

const ChallengeEventPage = ({ data }) => {
  const {
    heroImage,
    bannerText,
    bannerButtonText,
    backgroundVideo,
    heroTitle,
    heroSubtitle,
    eventLink,
    assemblies,
  } = data.contentfulPageAssemblyChallengeEvent;

  const [bannerStuck, setBannerStuck] = useState(false);
  const [animateBanner, setAnimateBanner] = useState(false);
  const [stickyBarPosition, setStickBarPosition] = useState(null);
  const heroBannerRef = useRef(null);
  const stickyBarRef = useRef(null);

  // Store last scroll to detect direction for animation reasons
  let lastScroll;

  const handleStickyBarScroll = () => {
    const scrollPosition = document.documentElement.scrollTop;
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
      setAnimateBanner(false);

      // If scroll is above hero then dont fix banner
      if (scrollPosition < middleOfHeroBanner) {
        setBannerStuck(false);
      }
      // If scroll would show banner naturally in the DOM without it sticking then remove fixed
      if (bannerWouldBeVisible) {
        setBannerStuck(false);
      }
    } else if (scrollPosition > middleOfHeroBanner && !bannerWouldBeVisible) {
      if (lastScroll < scrollPosition) setAnimateBanner(true);
      setBannerStuck(true);
    }
    lastScroll = scrollPosition;
  };

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
  }, [stickyBarPosition]);

  useEffect(() => {
    window.addEventListener('scroll', handleStickyBarScroll);
    // Specify how to clean up after this effect:
    return function cleanup() {
      window.removeEventListener('scroll', handleStickyBarScroll);
    };
  }, [stickyBarPosition, bannerStuck]);

  return (
    <Layout removeFooterMargin>
      <HeroVideo
        title={heroTitle}
        subtitle={heroSubtitle}
        video={backgroundVideo}
        bannerText={bannerText.bannerText}
        buttonText={bannerButtonText}
        image={heroImage}
        eventLink={eventLink.eventLink}
        heroBannerRef={heroBannerRef}
      />
      <ChallengeEventAssemblies assemblies={assemblies} />
      <StickyBanner
        title={heroTitle}
        subtitle={heroSubtitle}
        eventLink={eventLink.eventLink}
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
    contentfulPageAssemblyChallengeEvent(slug: { eq: $slug }) {
      title
      heroTitle
      heroImage {
        ...ImageFragment
      }
      heroSubtitle
      eventLink {
        eventLink
      }
      backgroundVideo {
        file {
          url
        }
      }
      bannerText {
        bannerText
      }
      bannerButtonText
      assemblies {
        ... on Node {
          ...PerksListFragment
          ...TestimonialsAssemblyFragment
          ...TwoColumnTextAndImageBlockFragment
        }
      }
    }
  }
`;
