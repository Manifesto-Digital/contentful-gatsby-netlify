import React from 'react'
import PropTypes from 'prop-types'
// Components
import LinkHandler from '../link-handler'
import Image from '../image'
// Styles
import { ButtonLink, CtaIcon, CtaText } from './styles'

const CTA = ({
  cta: { buttonText, ctaColour, internalLink, externalUrl, icon },
}) => (
  <LinkHandler
    externalUrl={externalUrl}
    internalLink={internalLink}
    Styled={ButtonLink}
    bg={ctaColour.toLowerCase()}
  >
    {icon && icon.file && (
      <CtaIcon>
        <Image image={icon} />
      </CtaIcon>
    )}

    <CtaText>{buttonText}</CtaText>
  </LinkHandler>
)

CTA.propTypes = {
  cta: PropTypes.shape({
    buttonText: PropTypes.string.isRequired,
    ctaColour: PropTypes.oneOf([
      'Red',
      'Donate',
      'Blue',
      'Black',
      'White Outline',
    ]).isRequired,
    internalLink: PropTypes.shape({
      id: PropTypes.string,
      slug: PropTypes.string,
    }),
    externalUrl: PropTypes.string,
    icon: PropTypes.shape({
      file: PropTypes.object,
    }),
  }),
}

export default CTA
