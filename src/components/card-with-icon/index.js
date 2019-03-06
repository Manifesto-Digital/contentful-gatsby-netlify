import React from 'react';
import PropTypes from 'prop-types';
import iconSrc from '../../utils/iconSrc';
// Styles
import { CardContainer, TitleText, SubText, CardCTA, CardSVG } from './styles';

const CardWithIcon = ({ data, cardsCount }) => {
  const { icon, titleText, subText, ctaText, ctaLink, externalLink } = data;
  return (
    <CardContainer cardsCount={cardsCount}>
      {icon && <CardSVG src={iconSrc(icon)} cacheGetRequests />}
      <TitleText>{titleText}</TitleText>
      {subText && <SubText>{subText}</SubText>}
      <CardCTA
        externalUrl={externalLink.URL}
        internalLink={ctaLink}
        bg="red"
        fullWidth
        newTab={externalLink.newTab}
      >
        {ctaText}
      </CardCTA>
    </CardContainer>
  );
};

CardWithIcon.propTypes = {
  data: PropTypes.shape({
    icon: PropTypes.oneOf(['Speech bubble', 'Telephone', 'Map Marker'])
      .isRequired,
    titleText: PropTypes.string.isRequired,
    subText: PropTypes.string,
    ctaText: PropTypes.string.isRequired,
    ctaLink: PropTypes.shape({
      id: PropTypes.string,
      slug: PropTypes.string,
    }),
  }),
  cardsCount: PropTypes.number,
};

export default CardWithIcon;
