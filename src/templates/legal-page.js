import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
// Components
import Layout from '../components/layout';
import {
  Container,
  ContentWithSideBar,
  TwoThirds,
  SideBar,
} from '../components/styled/containers';
import { TableOfContent } from '../components/table-of-contents';
import { TableOfContentsFootNotes } from '../components/table-of-contents/footnotes';
import {
  FootNotes,
  SidebarInner,
} from '../components/table-of-contents/styles';

const LegalPage = ({ data }) => {
  const [referenceList, updateReferenceList] = useState([]);
  const { pageInformation, title } = data.contentfulPageAssemblyLegalPage;

  return (
    <Layout
      pageInformation={pageInformation}
      pageTitle={title}
      removeFooterMargin
    >
      <Container>
        <ContentWithSideBar>
          <SideBar left>
            <SidebarInner>
              <h3>Homelessness applications</h3>
              <ul>
                <li>Overview of homelessness law and guidance</li>
                <li>Information and advice on homelessness</li>
                <li>
                  Applying as homeless
                  <ul>
                    <li>Making a homelessness application</li>
                    <li>Multiple, repeat and withdrawn applications</li>
                    <li>Criminal offences</li>
                    <li>Duty of public authority to refer</li>
                  </ul>
                </li>
                <li>Homelessness inquiries</li>
                <li>Assessments and personalised housing plans</li>
                <li>Defining homelessness</li>
                <li>Eligibility: non-EEA/EU nationals</li>
                <li>Eligibility: EEA/EU nationals and British nationals</li>
                <li>Priority need</li>
                <li>Intentional homelessness</li>
                <li>Local connection</li>
                <li>Homelessness duties</li>
                <li>Offers and suitability of accommodation</li>
                <li>Ending duties</li>
                <li>Referral to another local authority</li>
                <li>Challenging homelessness decisions</li>
                <li>Homelessness strategies</li>
                <li>Homelessness in Wales</li>
              </ul>
            </SidebarInner>
          </SideBar>
          <TwoThirds>
            <TableOfContent
              data={data.contentfulPageAssemblyLegalPage}
              updateReferenceList={updateReferenceList}
            />
          </TwoThirds>
        </ContentWithSideBar>
      </Container>
      {referenceList && (
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
};

export default LegalPage;

export const legalPageQuery = graphql`
  query legalPageQuery($slug: String!) {
    contentfulPageAssemblyLegalPage(slug: { eq: $slug }) {
      slug
      title
      applicableRegions
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
      pageInformation {
        ...PageInformationFragment
      }
    }
  }
`;
