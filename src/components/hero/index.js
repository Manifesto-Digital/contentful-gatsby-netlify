import React from 'react';
import PropTypes from 'prop-types';
// Components
import HeroWithCard from './hero-with-card';
import HeroNoCard from './hero-no-card';
import DonationHero from '../donation-hero';

const Hero = ({ content }) => {
  const { type } = content.internal;

  if (type === 'ContentfulTopicHeroWithCard') {
    return <HeroWithCard content={content} />;
  }

  if (type === 'ContentfulTopicHeroNoCard') {
    return <HeroNoCard content={content} />;
  }

  if (type === 'ContentfulTopicDonationHero') {
    return <DonationHero content={content} />;
  }

  return null;
};

Hero.propTypes = {
  content: PropTypes.object,
};

export default Hero;
