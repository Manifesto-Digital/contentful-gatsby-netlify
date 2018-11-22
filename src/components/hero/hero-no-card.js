import React from 'react'
import PropTypes from 'prop-types'
// Components
import ResponsiveImage from '../image/responsive'
// Styles
import {
  HeroNoCard,
  CenteredMedia,
  CenteredContent,
  Title,
  Subtitle,
} from './styles'

const Hero = ({ content }) => {
  const { image, title, subtitle, blackText } = content

  return (
    <HeroNoCard>
      <CenteredMedia>
        {image && (
          <ResponsiveImage mobileW={800} desktopW={1600} image={image} />
        )}
      </CenteredMedia>
      <CenteredContent black={blackText}>
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </CenteredContent>
    </HeroNoCard>
  )
}

Hero.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    blackText: PropTypes.bool,
    image: PropTypes.object,
  }),
}

export default Hero
