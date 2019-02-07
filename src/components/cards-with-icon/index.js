import React from 'react';
import PropTypes from 'prop-types';
import CardWithIcon from '../card-with-icon/index';
import { Container } from '../styled/containers';

// Styles
import { FlexWrapper } from './styles';

const CardsWithIcon = ({ data, insideContainer }) => {
  const { cards } = data;

  return (
    <Container>
      <FlexWrapper>
        {cards &&
          cards.map((card, i) => (
            <CardWithIcon
              key={i}
              data={card}
              insideContainer={!insideContainer}
            />
          ))}
      </FlexWrapper>
    </Container>
  );
};

CardsWithIcon.propTypes = {
  data: PropTypes.shape({
    cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
  insideContainer: PropTypes.bool,
};

CardsWithIcon.defaultProps = {
  insideContainer: false,
};

export default CardsWithIcon;
