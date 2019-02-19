import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
// Components
import { TableOfContent } from '../components/table-of-contents';
import { TableOfContentsFootNotes } from '../components/table-of-contents/footnotes';
import { FootNotes } from '../components/table-of-contents/styles';
import {
  Container,
  ContentWithSideBar,
  TwoThirds,
  SideBar,
} from '../components/styled/containers';

const TableOfContentsPage = ({ data }) => {
  const [referenceList, updateReferenceList] = useState([]);

  return (
    <Layout removeFooterMargin>
      <Container>
        <ContentWithSideBar>
          <SideBar>
            <h3>SIDEBAR</h3>
          </SideBar>
          <TwoThirds>
            <TableOfContent
              data={data.contentfulPageAssemblyTableOfContents}
              updateReferenceList={updateReferenceList}
            />
          </TwoThirds>
        </ContentWithSideBar>
      </Container>

      <FootNotes>
        <Container>
          {referenceList && (
            <TableOfContentsFootNotes referenceList={referenceList} />
          )}
        </Container>
      </FootNotes>
    </Layout>
  );
};

TableOfContentsPage.propTypes = {
  data: PropTypes.shape({
    systemName: PropTypes.isRequired,
    applicableRegions: PropTypes.string,
    openingStatement: PropTypes.object,
    content: PropTypes.object,
  }),
};

export default TableOfContentsPage;

export const tabelOfContentsPageQuery = graphql`
  query tabelOfContentsPageQuery($slug: String!) {
    contentfulPageAssemblyTableOfContents(slug: { eq: $slug }) {
      internal {
        type
      }
      systemName
      applicableRegions
      openingStatement {
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
    }
  }
`;
