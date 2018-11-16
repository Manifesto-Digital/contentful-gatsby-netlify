import React from 'react'
import PropTypes from 'prop-types'
// Components
import CTA from '../cta'
// Styles
import { Container } from '../styled/containers'
import { Banner, Header } from './styles'

const CTABanner = ({ cta, headerText, bannerColour }) => (
  <Banner bannerColour={bannerColour.toLowerCase()}>
    <Container>
      <Header bannerColour={bannerColour.toLowerCase()}>{headerText}</Header>
      <CTA cta={cta} />
    </Container>
  </Banner>
)

CTABanner.propTypes = {
  cta: PropTypes.shape({
    buttonText: PropTypes.string.isRequired,
    ctaColour: PropTypes.string.isRequired,
    internalLink: PropTypes.shape({
      id: PropTypes.string,
      slug: PropTypes.string,
    }),
    externalUrl: PropTypes.string,
  }),
  headerText: PropTypes.string.isRequired,
  bannerColour: PropTypes.string,
}

export default CTABanner
