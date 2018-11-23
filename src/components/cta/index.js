import React from 'react'
import PropTypes from 'prop-types'
// Components
import LinkHandler from '../link-handler'
// Styles
import { ButtonLink } from './styles'

const CTA = ({ cta: { buttonText, ctaColour, internalLink, externalUrl } }) => (
  <LinkHandler
    externalUrl={externalUrl}
    internalLink={internalLink}
    text={buttonText}
    Styled={ButtonLink}
    bg={ctaColour.toLowerCase()}
  >
    {buttonText}
  </LinkHandler>
)

CTA.propTypes = {
  cta: PropTypes.shape({
    buttonText: PropTypes.string.isRequired,
    ctaColour: PropTypes.oneOf([
      'Red',
      'Green',
      'Blue',
      'Black',
      'White Outline',
    ]).isRequired,
    internalLink: PropTypes.shape({
      id: PropTypes.string,
      slug: PropTypes.string,
    }),
    externalUrl: PropTypes.string,
  }),
}

export default CTA
