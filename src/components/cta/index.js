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
  link,
  icon,
  fullWidth,
  className,
  externalUrl,
  marginBottom,
}) => {
  if (!link) return null;

  return (
    <StyledLinkHandler
      link={link}
      bg={consistentString(bg)}
      className={className}
      fullWidth={fullWidth}
      externalUrl={externalUrl}
      marginBottom={marginBottom}
    >
      {icon && icon.file && (
        <CtaIcon>
          <Image image={icon} width={300} />
        </CtaIcon>
      )}

      <CtaText>{children}</CtaText>
    </StyledLinkHandler>
  );
};

CTA.fromCMS = ({ buttonText, ctaColour, ...rest }) => ({
  children: buttonText,
  bg: ctaColour.toLowerCase(),
  ...rest,
});

CTA.propTypes = {
  children: PropTypes.node.isRequired,
  bg: PropTypes.oneOf(['red', 'donate', 'blue', 'black', 'white outline']),
  link: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired, // Multi ref link but will only be 1
  icon: PropTypes.shape({
    file: PropTypes.object,
  }),
  fullWidth: PropTypes.bool,
  externalUrl: PropTypes.bool,
  className: PropTypes.string,
  marginBottom: PropTypes.bool,
};

export default CTA;
