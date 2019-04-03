import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { QuoteImage as PersonPageImage } from '../components/quotation/styles';
import Layout from '../components/layout';
import PageTitle from '../components/page-title';
import QuotationWithImage from '../components/quotation';
import PersonCardList from '../components/person/card-list';
import { Container, TwoThirds } from '../components/styled/containers';

const Page = ({ data }) => {
  const {
    title,
    person,
    quotation,
    pageInformation,
  } = data.contentfulPageAssemblyPerson;
  const { jobTitle, photo, bio } = person;
  const personList = data.allContentfulTopicPerson
    ? data.allContentfulTopicPerson.edges.map(item => item.node)
    : null;

  return (
    <Layout pageInformation={pageInformation} pageTitle={title}>
      <article>
        <PageTitle paddingBottom>
          <h1>{title}</h1>
          {jobTitle && <h3>{jobTitle}</h3>}
        </PageTitle>
        <Container>
          <TwoThirds>
            {quotation ? (
              <QuotationWithImage
                quote={quotation.quotation}
                image={photo}
                insideContainer
              />
            ) : (
              <PersonPageImage image={photo} insideContainer />
            )}
            {bio && <p>{bio.internal.content}</p>}
            <PersonCardList list={personList} insideContainer />
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
      pageInformation {
        ...PageInformationFragment
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
