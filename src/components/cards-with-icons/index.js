import React from 'react';
import PropTypes from 'prop-types';
import CardWithIcon from '../card-with-icon/index';
import { Container } from '../styled/containers';

// Styles
import { FlexWrapper } from './styles';

const CardsWithIcons = ({ data, insideContainer }) => {
  const { cards } = data;

  return (
    <Container padding={!insideContainer}>
      <FlexWrapper>
        {cards &&
          cards.map((card, i) => (
            <CardWithIcon cardsCount={cards.length} key={i} data={card} />
          ))}
      </FlexWrapper>
    </Container>
  );
};

CardsWithIcons.propTypes = {
  data: PropTypes.shape({
    cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
  insideContainer: PropTypes.bool,
};

CardsWithIcons.defaultProps = {
  insideContainer: false,
};

export default CardsWithIcons;
