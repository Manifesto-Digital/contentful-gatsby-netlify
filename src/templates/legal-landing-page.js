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
import { Wrapper, Subheader } from '../components/legal-landing-page/styles';

const LegalLandingPage = ({ data }) => {
  const {
    pageName,
    subheader,
    introductionText,
    pageReferences,
    sideBarLinks,
    pageInformation,
  } = data.contentfulPageAssemblyLegalLandingPage;

  return (
    <Layout pageInformation={pageInformation} pageTitle={pageName}>
      <article>
        <PageTitle>
          <h1>{pageName}</h1>
          <Subheader>{subheader}</Subheader>
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
              <SideBar>
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
      title
      subheader
      introductionText {
        childContentfulRichText {
          html
        }
      }
    }
  }
`;
