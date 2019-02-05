import React from 'react';
import PropTypes from 'prop-types';
import CardWithIcon from '../card-with-icon/index';

// Styles
import {
  CardsContainer,
  // Row,
} from './styles';

const CardsWithIcon = ({ data, insideContainer }) => {
  const { cards } = data;

  // TODO: Add container styling
  return (
    <CardsContainer>
      {cards &&
        cards.map((card, i) => (
          <CardWithIcon
            key={i}
            data={card}
            insideContainer={!insideContainer}
          />
        ))}
    </CardsContainer>
  );
};

CardsWithIcon.propTypes = {
  data: PropTypes.shape({
    cards: PropTypes.arrayOf(CardWithIcon).isRequired,
  }),
  insideContainer: PropTypes.bool,
};

CardsWithIcon.defaultProps = {
  insideContainer: false,
};

export default CardsWithIcon;
