import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
// Components
import Item from '../../components/press-releases/list-item';
import Layout from '../../components/layout';
import MediaContact from '../../components/media-contact';
import PageTitle from '../../components/page-title';
import Pagination from '../../components/pagination';
// Styles
import {
  Container,
  TwoThirds,
  SideBar,
  ContentWithSideBar,
} from '../../components/styled/containers';
import { List } from './styles';

const PressReleaseList = ({ data, pageContext }) => {
  const posts = data.allContentfulPagePressRelease.edges;
  const { title, subHeading } = pageContext;

  return (
    <Layout>
      <PageTitle twoThirds paddingBottom>
        <h1>{title}</h1>
        <p>{subHeading}</p>
      </PageTitle>

      <List>
        <Container>
          <ContentWithSideBar>
            <TwoThirds>
              {posts.map(({ node }) => (
                <Item key={node.id} data={node} />
              ))}
              <Pagination pageContext={pageContext} slug={pageContext.slug} />
            </TwoThirds>

            <SideBar>
              <MediaContact innerColour="white" />
            </SideBar>
          </ContentWithSideBar>
        </Container>
      </List>
    </Layout>
  );
};

PressReleaseList.propTypes = {
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

export default PressReleaseList;

export const pressReleasePageQuery = graphql`
  query pressReleaseQuery2($skip: Int!, $limit: Int!) {
    allContentfulPagePressRelease(
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
        }
      }
    }
  }
`;
