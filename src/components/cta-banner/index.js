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
  cta: PropTypes.object.isRequired,
  headerText: PropTypes.string.isRequired,
  bannerColour: PropTypes.oneOf(['Red', 'Green', 'Blue', 'Black']).isRequired,
}

export default CTABanner
