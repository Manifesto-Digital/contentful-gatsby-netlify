import React from 'react';
import PropTypes from 'prop-types';
import Icon from './icon';
import CTA from '../cta';
import { consistentString } from '../../utils/content-formatting';

// Styles
import { CardContainer, Wrapper, TitleText, SubText, CardCTA } from './styles';

const CardWithIcon = ({ data, insideContainer }) => {
  const { icon, titleText, subText, ctaText, ctaLink } = data;

  return (
    <CardContainer insideContainer={insideContainer}>
      <Wrapper>
        {icon && <Icon icon={consistentString(icon)} />}
        <TitleText>{titleText}</TitleText>
        <SubText>{subText}</SubText>
        <CardCTA
          {...CTA.fromCMS({
            buttonText: ctaText,
            ctaColour: 'Red',
            internalLink: ctaLink,
          })}
          fullWidth
        />
      </Wrapper>
    </CardContainer>
  );
};

CardWithIcon.propTypes = {
  data: PropTypes.shape({
    icon: PropTypes.oneOf(['Speech bubble', 'Phone', 'Map pin']).isRequired,
    titleText: PropTypes.string.isRequired,
    subText: PropTypes.string,
    ctaText: PropTypes.string.isRequired,
    ctaLink: PropTypes.shape({
      id: PropTypes.string,
      slug: PropTypes.string,
    }),
  }),
  insideContainer: PropTypes.bool,
};

CardWithIcon.defaultProps = {
  insideContainer: false,
};

export default CardWithIcon;
