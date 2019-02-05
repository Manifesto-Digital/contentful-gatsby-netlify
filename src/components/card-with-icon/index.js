import React from 'react';
import PropTypes from 'prop-types';
import Icon from './icon';
import CTA from '../cta';
import { consistentString } from '../../utils/content-formatting';

// Styles
import { CardContainer, TitleText, SubText, CardCTA } from './styles';

const CardWithIcon = ({ data, insideContainer }) => {
  const {
    icon,
    titleText,
    subText,
    ctaText,
    ctaLink: { slug: ctaLink },
  } = data;

  const ctaData = {
    buttonText: ctaText,
    ctaColour: 'Red',
    internalLink: '',
    externalUrl: ctaLink,
  };

  return (
    <CardContainer insideContainer={insideContainer}>
      {icon && <Icon icon={consistentString(icon)} />}
      <TitleText>{titleText}</TitleText>
      <SubText>{subText}</SubText>
      <CardCTA {...CTA.fromCMS(ctaData)} />
    </CardContainer>
  );
};

CardWithIcon.propTypes = {
  data: PropTypes.shape({
    icon: PropTypes.oneOf(['Speech bubble', 'Phone', 'Map pin']).isRequired,
    titleText: PropTypes.string.isRequired,
    subText: PropTypes.string,
    ctaText: PropTypes.string.isRequired,
    ctaLink: PropTypes.string.isRequired,
  }),
  insideContainer: PropTypes.bool,
};

CardWithIcon.defaultProps = {
  insideContainer: false,
};

export default CardWithIcon;
