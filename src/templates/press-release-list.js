import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import {
  Container,
  TwoThirds,
  SideBar,
  ContentWithSideBar,
} from '../components/styled/containers';
import PaddedBox from '../components/padded-box';
import MediaContact from '../components/media-contact';
import Pagination from '../components/pagination';

const PressReleaseList = styled.div`
  background: ${props => props.theme.palette.grey10};
  padding-top: ${props => props.theme.spacing.large};
`;

const PressItem = styled(PaddedBox)`
  position: relative;
`;

const CoveringLink = styled.a`
  bottom: 0;
  left: 0;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 0;
`;

const PostedDate = styled.p`
  color: ${props => props.theme.palette.grey45};
`;

const Item = () => (
  <PressItem shadow bg="white">
    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et
      imperdiet nisi, nec rutrum diam. Aliquam rutrum bibendum luctus.
    </p>
    <CoveringLink
      aria-hidden="true"
      href="/320,000-people-in-britain-are-now-homeless,-as-numbers-keep-rising"
    >
      link text
    </CoveringLink>
    <PostedDate>
      <strong>date</strong>
    </PostedDate>
  </PressItem>
);

const PressReleaseTemplate = data => {
  const posts = data.allContentfulPageAssemblyPressReleasePage.edges;

  return (
    <Layout>
      <Container>
        <TwoThirds>
          <h1>Press releases and statements</h1>
          <p>
            For more information about any of our press releases, please contact
            our Media team.
          </p>
        </TwoThirds>
      </Container>

      <PressReleaseList>
        <Container>
          <ContentWithSideBar>
            <TwoThirds>
              {posts.map(({ node }) => {
                return <div key={node.id}>{node.title}</div>;
              })}

              <Pagination />
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
        }
      }
    }
  }
`;
