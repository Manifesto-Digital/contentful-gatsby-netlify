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
    title,
    introductionText,
    applicableRegions,
    calloutInformation,
    pageInformation,
  } = data.contentfulPageLegalLanding;

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
    <Layout pageInformation={pageInformation} pageTitle={title} legal>
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
              <h1>{title}</h1>
            </PageTitle>
            <RichText richText={introductionText} />
            {applicableRegions && (
              <InlineCallOut borderColour="red" insideContainer>
                This content applies to <strong>{applicableRegions}</strong>
              </InlineCallOut>
            )}
            {calloutInformation && (
              <InlineCallOut borderColour="red" insideContainer>
                <RichText richText={calloutInformation} />
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
    contentfulPageLegalLanding: PropTypes.object,
  }),
  pageContext: PropTypes.object,
};

export default LegalLandingPage;

export const eventsLandingPageQuery = graphql`
  query legalLandingPageTemplateQuery($slug: String!) {
    contentfulPageLegalLanding(slug: { eq: $slug }) {
      title
      applicableRegions
      pageInformation {
        ...PageInformationFragment
      }
      introductionText {
        json
      }
      calloutInformation {
        json
      }
    }
  }
`;
