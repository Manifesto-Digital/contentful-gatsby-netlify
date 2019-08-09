import React from 'react';
import PropTypes from 'prop-types';
// Components
import HeroWithCard from './hero-with-card';
import HeroNoCard from './hero-no-card';
import DonationHero from '../donation-hero';

const Hero = ({ content }) => {
  const { type } = content.internal;
  if (!content) return null;

  if (type === 'ContentfulComponentHeroWithCard') {
    return <HeroWithCard content={content} />;
  }

  if (type === 'ContentfulComponentHeroNoCard') {
    return <HeroNoCard content={content} />;
  }

  if (type === 'ContentfulComponentDonationHero') {
    return <DonationHero content={content} />;
  }

  return null;
};

Hero.propTypes = {
  content: PropTypes.object,
};

export default Hero;
