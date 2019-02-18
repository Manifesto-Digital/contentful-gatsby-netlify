import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
// Components
import PageTitle from '../components/page-title';
import RichText from '../components/rich-text';
import Item from '../components/press-releases/list-item';
import LegalSideBar from '../components/legal-sidebar';
// Styles
import {
  Container,
  TwoThirds,
  ContentWithSideBar,
  SideBar,
} from '../components/styled/containers';
import { Wrapper } from '../components/legal-landing-page/styles';

const LegalLandingPage = ({ data }) => {
  const {
    pageName,
    subheader,
    introductionText,
    pageReferences,
    sideBarLinks,
  } = data.contentfulPageAssemblyLegalLandingPage;

  console.log(sideBarLinks);

  return (
    <Layout>
      <article>
        <PageTitle>
          <h1>{pageName}</h1>
          <div>{subheader}</div>
        </PageTitle>
        <Container>
          <TwoThirds>
            <RichText richText={introductionText} />
          </TwoThirds>
        </Container>
        <Wrapper>
          <Container>
            <ContentWithSideBar>
              <TwoThirds>
                {pageReferences &&
                  pageReferences.map((pageReference, key) => (
                    <Item key={key} data={pageReference} />
                  ))}
              </TwoThirds>
              <SideBar maxWidth>
                <LegalSideBar data={{ sideBarLinks }} />
              </SideBar>
            </ContentWithSideBar>
          </Container>
        </Wrapper>
      </article>
    </Layout>
  );
};

LegalLandingPage.propTypes = {
  data: PropTypes.shape({
    contentfulPageAssemblyLegalLandingPage: PropTypes.object,
  }),
};

export default LegalLandingPage;

export const eventsLandingPageQuery = graphql`
  query legalLandingPageTemplateQuery($slug: String!) {
    contentfulPageAssemblyLegalLandingPage(slug: { eq: $slug }) {
      pageName
      subheader
      introductionText {
        childContentfulRichText {
          html
        }
      }
      pageReferences {
        title
        slug
      }
      sideBarLinks {
        title
        slug
      }
    }
  }
`;
