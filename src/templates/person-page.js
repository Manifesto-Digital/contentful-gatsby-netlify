import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PageTitle from '../components/page-title';
import Quotation from '../components/quotation';
import PersonCardList from '../components/person/card-list';
import { Container, TwoThirds } from '../components/styled/containers';

const Page = ({ data }) => {
  const { title, person, quotation } = data.contentfulPageAssemblyPerson;
  const { jobTitle, photo, bio } = person;
  const personList = data.contentfulPageAssemblyPerson
    ? data.allContentfulTopicPerson.edges
    : null;

  // Turn the array of nodes into an array of objects
  const personListArray = personList.map(item => item.node);

  return (
    <Layout>
      <article>
        <PageTitle paddingBottom>
          <h1>{title}</h1>
          {jobTitle && <h3>{jobTitle}</h3>}
        </PageTitle>
        <Container>
          <TwoThirds>
            <Quotation
              quote={quotation.quotation}
              image={photo}
              insideContainer
            />
            {bio && <p>{bio.internal.content}</p>}
            <PersonCardList list={personListArray} insideContainer />
          </TwoThirds>
        </Container>
      </article>
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.shape({
    contentfulPageAssemblyPerson: PropTypes.object,
  }),
};

export default Page;

export const personPageQuery = graphql`
  query personPageTemplateQuery(
    $slug: String!
    $category: String!
    $personId: String!
  ) {
    contentfulPageAssemblyPerson(slug: { eq: $slug }) {
      title
      quotation {
        quotation
      }
      person {
        ...PersonFragment
      }
    }
    allContentfulTopicPerson(
      filter: { category: { eq: $category }, id: { ne: $personId } }
    ) {
      edges {
        node {
          ...PersonFragment
          page_assembly___person_ {
            slug
          }
        }
      }
    }
  }
`;
