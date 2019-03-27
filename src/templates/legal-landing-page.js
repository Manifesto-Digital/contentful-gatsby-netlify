import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { buildCurrentPageHierarchy } from '../components/legal-sidebar/helpers';
// Components
import Layout from '../components/layout';
import {
  Container,
  ContentWithSideBar,
  TwoThirds,
  SideBar,
} from '../components/styled/containers';
import { SidebarInner } from '../components/table-of-contents/styles';
import LegalSideBar from '../components/legal-sidebar';
import RichText from '../components/rich-text';
import PageTitle from '../components/page-title';
import LegalSubPageList from '../components/legal-landing-page/subpage-list';
import InlineCallOut from '../components/inline-callout';

const LegalLandingPage = ({ data, pageContext }) => {
  const {
    pageName,
    introductionText,
    applicableRegions,
  } = data.contentfulPageAssemblyLegalLandingPage;

  let currentPageHierarchy = null;
  let heading = null;
  let currentPage = null;

  try {
    ({ currentPageHierarchy, heading, currentPage } = buildCurrentPageHierarchy(
      pageContext.legalHierarchy,
      pageContext.slug
    ));
  } catch (e) {
    console.log('e', e);
  }

  return (
    <Layout removeFooterMargin>
      <Container>
        <ContentWithSideBar>
          {currentPageHierarchy && heading && (
            <SideBar left desktop>
              <SidebarInner>
                <LegalSideBar
                  hierarchy={currentPageHierarchy}
                  slug={pageContext.slug}
                  heading={heading}
                />
              </SidebarInner>
            </SideBar>
          )}

          <TwoThirds>
            <PageTitle noContainer>
              <h1>{pageName}</h1>
            </PageTitle>
            <RichText richText={introductionText} />
            {applicableRegions && (
              <InlineCallOut borderColour="red" insideContainer>
                This content applies to <strong>{applicableRegions}</strong>
              </InlineCallOut>
            )}
            {currentPage && currentPage.children && (
              <LegalSubPageList items={currentPage.children} />
            )}
          </TwoThirds>
        </ContentWithSideBar>
      </Container>
    </Layout>
  );
};

LegalLandingPage.propTypes = {
  data: PropTypes.shape({
    contentfulPageAssemblyLegalLandingPage: PropTypes.object,
  }),
  pageContext: PropTypes.object,
};

export default LegalLandingPage;

export const eventsLandingPageQuery = graphql`
  query legalLandingPageTemplateQuery($slug: String!) {
    contentfulPageAssemblyLegalLandingPage(slug: { eq: $slug }) {
      pageName
      subheader
      applicableRegions
      introductionText {
        childContentfulRichText {
          html
        }
      }
    }
  }
`;
