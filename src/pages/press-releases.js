import React from 'react';
import styled from 'styled-components';
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
    <h3>Three million new social homes key to solving housing crisis</h3>
    <p>
      Shelter’s independent commission calls for huge expansion in public house
      building...
    </p>
    <CoveringLink
      aria-hidden="true"
      href="/320,000-people-in-britain-are-now-homeless,-as-numbers-keep-rising"
    >
      Three million new social homes key to solving housing crisis
    </CoveringLink>
    <PostedDate>
      <strong>Posted on 14 Jan 2019</strong>
    </PostedDate>
  </PressItem>
);

const PressReleaseTemplate = () => (
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
            <Item />
            <Item />
            <Item />
            <Item />
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

export default PressReleaseTemplate;
