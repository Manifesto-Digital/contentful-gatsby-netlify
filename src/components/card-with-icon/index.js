import React from 'react';
import PropTypes from 'prop-types';
import iconSrc from '../../utils/iconSrc';
// Styles
import { CardContainer, TitleText, SubText, CardCTA, CardSVG } from './styles';

const CardWithIcon = ({ data, cardsCount }) => {
  if (!data) return null;

  const { icon, titleText, subText, ctaText, link } = data;

  return (
    <CardContainer cardsCount={cardsCount}>
      {icon && <CardSVG src={iconSrc(icon)} cacheGetRequests />}
      <TitleText>{titleText}</TitleText>
      {subText && <SubText>{subText}</SubText>}

      {link && (
        <CardCTA
          link={link}
          bg="red"
          fullWidth
          dataTracking={icon}
          className="tracking-card-cta"
        >
          {ctaText}
        </CardCTA>
      )}
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
    link: PropTypes.object,
  }),
  cardsCount: PropTypes.number,
};

export default CardWithIcon;
