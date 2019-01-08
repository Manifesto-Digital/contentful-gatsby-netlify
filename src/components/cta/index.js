import React from 'react';
import PropTypes from 'prop-types';
// Components
import Image from '../image';
// Styles
import { StyledLinkHandler, CtaIcon, CtaText } from './styles';

const CTA = ({ cta }) => {
  const { buttonText, ctaColour, internalLink, externalUrl, icon } = cta;

  return (
    <StyledLinkHandler
      externalUrl={externalUrl}
      internalLink={internalLink}
      bg={ctaColour.toLowerCase()}
    >
      {icon && icon.file && (
        <CtaIcon>
          <Image image={icon} />
        </CtaIcon>
      )}

      <CtaText>{buttonText}</CtaText>
    </StyledLinkHandler>
  );
};

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
};

export default CTA;
