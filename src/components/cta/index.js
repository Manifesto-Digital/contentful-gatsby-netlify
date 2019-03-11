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
  externalURL,
  newTab,
  icon,
  fullWidth,
  className,
}) => (
  <StyledLinkHandler
    externalUrl={externalURL}
    internalLink={internalLink}
    bg={consistentString(bg)}
    className={className}
    fullWidth={fullWidth}
    newTab={externalURL}
  >
    {icon && icon.file && (
      <CtaIcon>
        <Image image={icon} width={300} />
      </CtaIcon>
    )}

    <CtaText>{children}</CtaText>
  </StyledLinkHandler>
);

CTA.fromCMS = ({
  buttonText,
  ctaColour,
  internalLink,
  externalLink,
  icon,
}) => ({
  children: buttonText,
  bg: ctaColour.toLowerCase(),
  internalLink,
  externalURL: externalLink,
  newTab: externalLink,
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
  externalURL: PropTypes.object,
  icon: PropTypes.shape({
    file: PropTypes.object,
  }),
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
};

export default CTA;
