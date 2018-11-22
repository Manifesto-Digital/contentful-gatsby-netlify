import React from 'react'
import PropTypes from 'prop-types'
// Components
import HeroWithCard from './hero-with-card'
import HeroNoCard from './hero-no-card'

const Hero = ({ content }) => {
  const { __typename: types } = content

  return (
    <>
      {types === 'ContentfulTopicHeroWithCard' ? (
        <HeroWithCard content={content} />
      ) : (
        <HeroNoCard content={content} />
      )}
    </>
  )
}

Hero.propTypes = {
  content: PropTypes.object,
}

export default Hero
