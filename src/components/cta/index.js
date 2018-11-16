import React from 'react'
import PropTypes from 'prop-types'
import { getInternalLink } from '../../utils/links'
// Styles
import { ButtonLink } from './styles'

const CTA = ({ cta: { buttonText, ctaColour, internalLink, externalUrl } }) => {
  const link = internalLink ? getInternalLink(internalLink.slug) : externalUrl
  return (
    <ButtonLink href={link} bg={ctaColour.toLowerCase()}>
      {buttonText}
    </ButtonLink>
  )
}

CTA.propTypes = {
  cta: PropTypes.shape({
    buttonText: PropTypes.string.isRequired,
    ctaColour: PropTypes.string.isRequired,
    internalLink: PropTypes.shape({
      id: PropTypes.string,
      slug: PropTypes.string,
    }),
    externalUrl: PropTypes.string,
  }),
}

export default CTA
