import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Item from '../components/press-releases/list-item';
import Layout from '../components/layout';
import {
  Container,
  TwoThirds,
  SideBar,
  ContentWithSideBar,
} from '../components/styled/containers';
import MediaContact from '../components/media-contact';
import PageTitle from '../components/page-title';
import Pagination from '../components/pagination';

const PressReleaseList = styled.div`
  background: ${props => props.theme.palette.grey10};
  padding-top: ${props => props.theme.spacing.large};
`;

const PressReleaseTemplate = ({ data, pageContext }) => {
  const posts = data.allContentfulPageAssemblyPressReleasePage.edges;
  const { title, subHeading } = pageContext;
  return (
    <Layout>
      <PageTitle twoThirds paddingBottom>
        <h1>{title}</h1>
        <p>{subHeading}</p>
      </PageTitle>

      <PressReleaseList>
        <Container>
          <ContentWithSideBar>
            <TwoThirds>
              {posts.map(({ node }) => (
                <Item key={node.id} pressRelease={node} />
              ))}
              <Pagination pageContext={pageContext} slug="press-releases" />
            </TwoThirds>

            <SideBar>
              <MediaContact innerColour="white" />
            </SideBar>
          </ContentWithSideBar>
        </Container>
      </PressReleaseList>
    </Layout>
  );
};

PressReleaseTemplate.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.shape({
    currentPage: PropTypes.number,
    limit: PropTypes.number,
    numPages: PropTypes.number,
    skip: PropTypes.number,
    title: PropTypes.string.isRequired,
    subHeading: PropTypes.string.isRequired,
  }).isRequired,
};

Item.propTypes = {
  title: PropTypes.string,
  datePosted: PropTypes.string,
};

export default PressReleaseTemplate;

export const pressReleasePageQuery = graphql`
  query pressReleaseQuery2($skip: Int!, $limit: Int!) {
    allContentfulPageAssemblyPressReleasePage(
      limit: $limit
      skip: $skip
      sort: { fields: [datePosted], order: DESC }
    ) {
      edges {
        node {
          id
          title
          datePosted
          slug
          pageInformation {
            ...PageInformationFragment
          }
        }
      }
    }
  }
`;
