import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
// Components
import Layout from '../components/layout';
import HeroWithCard from '../components/hero/hero-with-card';
import LinkList from '../components/link-list';
import {
  Container,
  ContentWithSideBar,
  TwoThirds,
  SideBar,
} from '../components/styled/containers';
import PaddedBox from '../components/padded-box';
import LinkHandler from '../components/link-handler';

const LegalHomepage = ({ data }) => {
  const { pages, hero } = data.contentfulPageAssemblyLegalHomepage;
  const updatedLegalPages = data.allContentfulPageAssemblyLegalPage.edges;
  const whatsNew = updatedLegalPages.map(page => page.node);

  return (
    <Layout removeFooterMargin>
      <HeroWithCard content={hero} />
      <Container>
        <ContentWithSideBar>
          <TwoThirds>
            <LinkList
              columns={2}
              links={pages}
              showSummary
              heading
              insideContainer
            />
          </TwoThirds>
          <SideBar right>
            <PaddedBox>
              <h3>What's new</h3>
              <LinkList links={whatsNew} insideContainer showListStyle />
              <LinkHandler internalLink={{ slug: 'legal/whats-new' }}>
                View all updates
              </LinkHandler>
            </PaddedBox>
          </SideBar>
        </ContentWithSideBar>
      </Container>
    </Layout>
  );
};

LegalHomepage.propTypes = {
  data: PropTypes.shape({
    contentfulPageAssemblyLegalHomepage: PropTypes.object,
  }),
};

export default LegalHomepage;

export const eventsLandingPageQuery = graphql`
  query LegalHomepageTemplateQuery($slug: String!) {
    contentfulPageAssemblyLegalHomepage(slug: { eq: $slug }) {
      title
      hero {
        ...HeroWithCardFragment
      }
      pages {
        ...LinkFragment
      }
    }
    allContentfulPageAssemblyLegalPage(
      sort: { fields: lastAmended, order: DESC }
      limit: 5
    ) {
      edges {
        node {
          title
          slug
          lastAmended
          internal {
            type
          }
        }
      }
    }
  }
`;
