import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card';
// Styles
import { Wrapper, List } from './styles';
import { Container } from '../../styled/containers';

const PersonCardList = ({ list, insideContainer }) => {
  if (!list) return null;

  return (
    <Wrapper>
      <Container padding={!insideContainer}>
        <List>
          {list.map(person => (
            <Card
              key={person.id}
              person={person}
              link={
                person.page_assembly___person_
                  ? person.page_assembly___person_[0] // Link is only present if a person page assembly exists for this person
                  : null
              }
              columns={2}
            />
          ))}
        </List>
      </Container>
    </Wrapper>
  );
};

PersonCardList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
      }),
    })
  ),
  insideContainer: PropTypes.bool,
};

PersonCardList.defaultProps = {
  insideContainer: false,
};

export default PersonCardList;
