import React from 'react';
import PropTypes from 'prop-types';
import { consistentString } from '../../utils/content-formatting';
// Components
import Image from '../image';
// Styles
import { StyledLinkHandler, CtaIcon, CtaText } from './styles';

const CTA = ({
  children,
  bg,
  internalLink,
  externalUrl,
  icon,
  fullWidth,
  className,
}) => (
  <StyledLinkHandler
    externalUrl={externalUrl}
    internalLink={internalLink}
    bg={consistentString(bg)}
    className={className}
    fullWidth={fullWidth}
  >
    {icon && icon.file && (
      <CtaIcon>
        <Image image={icon} />
      </CtaIcon>
    )}

    <CtaText>{children}</CtaText>
  </StyledLinkHandler>
);

CTA.fromCMS = ({ buttonText, ctaColour, internalLink, externalUrl, icon }) => ({
  children: buttonText,
  bg: ctaColour.toLowerCase(),
  internalLink,
  externalUrl,
  icon,
});

CTA.propTypes = {
  children: PropTypes.node.isRequired,
  bg: PropTypes.oneOf(['red', 'donate', 'blue', 'black', 'white outline'])
    .isRequired,
  internalLink: PropTypes.shape({
    id: PropTypes.string,
    slug: PropTypes.string,
  }),
  externalUrl: PropTypes.string,
  icon: PropTypes.shape({
    file: PropTypes.object,
  }),
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
};

export default CTA;
