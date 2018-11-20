import React from 'react'
import PropTypes from 'prop-types'
// Components
import ResponsiveImage from '../image/responsive'
// Styles
import { HeroNoCard, MediaWrapper, Content, Title, Subtitle } from './styles'

const Hero = ({ content }) => {
  const { image, title, subtitle, blackText } = content

  return (
    <HeroNoCard>
      <MediaWrapper>
        {image && (
          <ResponsiveImage mobileW={700} desktopW={1500} image={image} />
        )}
      </MediaWrapper>
      <Content black={blackText}>
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </Content>
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
