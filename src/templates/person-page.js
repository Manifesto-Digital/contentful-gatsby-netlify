import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { QuoteImage as PersonPageImage } from '../components/quotation/styles';
import Layout from '../components/layout';
import PageTitle from '../components/page-title';
import QuotationWithImage from '../components/quotation';
import PersonCardList from '../components/person/card-list';
import Assemblies from '../components/assemblies';
import { Container, TwoThirds } from '../components/styled/containers';
import Breadcrumbs from '../components/breadcrumbs';

const Page = ({ data, pageContext }) => {
  const {
    title,
    person,
    quotation,
    pageInformation,
    assemblies,
  } = data.contentfulPagePerson;
  const { jobTitle, photo, bio } = person;
  const personList = data.allContentfulDataPerson
    ? data.allContentfulDataPerson.edges.map(item => item.node)
    : null;

  return (
    <Layout pageInformation={pageInformation} pageTitle={title}>
      <article>
        <Container>
          <Breadcrumbs
            parentPages={pageContext.menuParent}
            currentTitle={title}
          />
        </Container>
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
            <Assemblies assemblies={assemblies} insideContainer />
          </TwoThirds>
        </Container>
      </article>
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.shape({
    contentfulPagePerson: PropTypes.object,
  }),
  pageContext: PropTypes.object,
};

export default Page;

export const personPageQuery = graphql`
  query personPageTemplateQuery(
    $slug: String!
    $category: String!
    $personId: String!
  ) {
    contentfulPagePerson(slug: { eq: $slug }) {
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
      assemblies {
        ... on Node {
          ...ContentCardBannerFragment
          ...GoogleMapFragment
          ...InlineCallout
          ...ShareBlockFragment
        }
      }
    }
    allContentfulDataPerson(
      filter: { category: { eq: $category }, id: { ne: $personId } }
    ) {
      edges {
        node {
          ...PersonFragment
          page___person_ {
            slug
          }
        }
      }
    }
  }
`;
