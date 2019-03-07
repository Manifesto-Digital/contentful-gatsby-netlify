import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Container } from '../../styled/containers';
import CardList from '../card-list';
import { Header, Wrapper } from './styles';

export const PurePersonCollection = ({ people, data }) => {
  const { headerText } = data;

  return (
    <Wrapper>
      <Container>
        <Header>{headerText}</Header>
        <CardList list={people} insideContainer columns={3} limit={9} />
      </Container>
    </Wrapper>
  );
};

PurePersonCollection.propTypes = {
  people: PropTypes.array,
  data: PropTypes.object,
};

const PersonCollection = ({ data }) => {
  // Only query for people in the chosen group if a manual selection has not occurred
  if (data.people && data.people.length) {
    return <PurePersonCollection people={data.people} data={data} />;
  }

  if (!data.category) return null;

  // Unfortunately cannot pass variables to static queries currently
  return (
    <StaticQuery
      query={graphql`
        query personCollectionQuery {
          allContentfulTopicPerson {
            edges {
              node {
                ...PersonFragment
              }
            }
          }
        }
      `}
      render={response => {
        // Turn response into a simple array of objects and remove the nesting inside node
        // return only people from the same category as requests
        const personArray = [...response.allContentfulTopicPerson.edges]
          .map(edge => edge.node)
          .filter(person => person.category === data.category);

        return <PurePersonCollection data={data} people={personArray} />;
      }}
    />
  );
};

PersonCollection.propTypes = {
  data: PropTypes.object,
};

export default PersonCollection;
