import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { dateAsString } from '../utils/dates';
import { buildCurrentPageHierarchy } from '../components/legal-sidebar/helpers';
// Components
import Layout from '../components/layout';
import Breadcrumbs from '../components/breadcrumbs';
import RichText from '../components/rich-text';
import TableOfContent from '../components/table-of-contents';
import ContentWithReferences from '../components/table-of-contents/content-with-references';
import { TableOfContentsFootNotes } from '../components/table-of-contents/footnotes';
import LegalSideBar from '../components/legal-sidebar';
import LinkList from '../components/link-list';
import PageTitle from '../components/page-title';
import InlineCallOut from '../components/inline-callout';
// Styles
import {
  SidebarInner,
  FootNotes,
} from '../components/table-of-contents/styles';
import {
  Container,
  ContentWithSideBar,
  TwoThirds,
  SideBar,
  Section,
} from '../components/styled/containers';

const LegalPage = ({ data, pageContext }) => {
  const [referenceList, updateReferenceList] = useState([]);
  const legalPage = data.contentfulPageAssemblyLegalPage;
  const {
    slug,
    title,
    bodyCopy,
    applicableRegions,
    tableOfContents,
    essentialLinks,
    legislations,
    downloads,
    lastAmended,
    pageInformation,
  } = legalPage;
  const hasBottomSection =
    (referenceList && referenceList.length > 0) ||
    legislations ||
    essentialLinks ||
    downloads;

  let currentPageHierarchy = null;
  let heading = null;

  try {
    ({ currentPageHierarchy, heading } = buildCurrentPageHierarchy(
      pageContext.legalHierarchy,
      pageContext.slug
    ));
  } catch (e) {
    console.log('e', e);
  }

  return (
    <Layout
      pageInformation={pageInformation}
      slug={slug}
      removeFooterMargin
      legal
      pageTitle={title}
    >
      <article>
        <Container>
          <Breadcrumbs
            parentSlugs={pageContext.parentSlug}
            slug={slug}
            currentTitle={title}
          />
          <ContentWithSideBar>
            <SideBar left desktop>
              <SidebarInner>
                <LegalSideBar
                  hierarchy={currentPageHierarchy}
                  slug={pageContext.slug}
                  heading={heading}
                />
              </SidebarInner>
            </SideBar>
            <TwoThirds>
              <PageTitle noContainer>
                <h1>{title}</h1>
              </PageTitle>

              {bodyCopy && <RichText richText={bodyCopy} />}

              {tableOfContents && (
                <TableOfContent tableOfContents={tableOfContents} />
              )}
              <InlineCallOut borderColour="red" insideContainer>
                This content applies to <strong>{applicableRegions}</strong>
              </InlineCallOut>

              {tableOfContents && (
                <ContentWithReferences
                  tableOfContents={tableOfContents}
                  updateReferenceList={updateReferenceList}
                />
              )}
              {lastAmended && (
                <p>Last updated: {dateAsString(lastAmended, 'D MMMM YYYY')}</p>
              )}
            </TwoThirds>
          </ContentWithSideBar>
        </Container>

        {hasBottomSection && (
          <Section offWhite>
            {referenceList && referenceList.length > 0 && (
              <FootNotes>
                <Container>
                  <ContentWithSideBar>
                    <TwoThirds right>
                      <TableOfContentsFootNotes referenceList={referenceList} />
                    </TwoThirds>
                  </ContentWithSideBar>
                </Container>
              </FootNotes>
            )}
            {legalPage.legislations && (
              <Container>
                <ContentWithSideBar>
                  <TwoThirds right>
                    <LinkList
                      insideContainer
                      links={legislations}
                      headerText="Legislations"
                    />
                  </TwoThirds>
                </ContentWithSideBar>
              </Container>
            )}
            {essentialLinks && (
              <Container>
                <ContentWithSideBar>
                  <TwoThirds right>
                    <LinkList
                      insideContainer
                      links={essentialLinks}
                      headerText="Essential Links"
                    />
                  </TwoThirds>
                </ContentWithSideBar>
              </Container>
            )}
            {downloads && (
              <Container>
                <ContentWithSideBar>
                  <TwoThirds right>
                    <LinkList
                      downloads
                      insideContainer
                      links={downloads.files}
                      headerText="Downloads"
                    />
                  </TwoThirds>
                </ContentWithSideBar>
              </Container>
            )}
          </Section>
        )}
      </article>
    </Layout>
  );
};
LegalPage.propTypes = {
  data: PropTypes.shape({
    systemName: PropTypes.isRequired,
    applicableRegions: PropTypes.string,
    openingStatement: PropTypes.object,
    content: PropTypes.object,
  }),
  pageContext: PropTypes.object,
};

export default LegalPage;

export const legalPageQuery = graphql`
  query legalPageQuery($slug: String!) {
    contentfulPageAssemblyLegalPage(slug: { eq: $slug }) {
      slug
      title
      pageInformation {
        ...PageInformationFragment
      }
      applicableRegions
      pageInformation {
        ...PageInformationFragment
      }
      bodyCopy {
        childContentfulRichText {
          html
        }
      }
      tableOfContents {
        title
        textContent {
          childContentfulRichText {
            html
          }
        }
      }
      legislations {
        ...LinkFragment
      }
      essentialLinks {
        ...LinkFragment
      }
      downloads {
        files {
          ...DownloadableFileFragment
        }
      }
      lastAmended
    }
  }
`;
