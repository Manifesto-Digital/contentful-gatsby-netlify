import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import SVG from 'react-inlinesvg';

import LinkHandler from '../components/link-handler';
import { dateAsString } from '../utils/dates';

import ArrowRight from '../assets/svg/icons/angle-right.svg';
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

const CoveringLink = styled(LinkHandler)`
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

const ArrowIcon = styled(SVG)``;

const IconHolder = styled.div`
  border-bottom-right-radius: ${props => props.theme.borderradius.small};
  background: ${props => props.theme.palette.grey45};
  color: ${props => props.theme.palette.white};
  padding-top: 3px;
  height: 30px;
  width: 30px;
  position: absolute;
  right: 3px;
  bottom: 3px;

  svg {
    width: 22px;
    height: 22px;
    display: block;
    margin: 0 auto;
  }
`;

const Item = props => {
  const { title, datePosted } = props;
  return (
    <PressItem shadow bg="white">
      <h3>{title}</h3>
      <p>
        TODO: add metadata description here.
        <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at
        molestie lacus. Nulla ac mauris nunc.{' '}
      </p>
      <CoveringLink aria-hidden="true" internalLink={props}>
        {title}
      </CoveringLink>

      <IconHolder aria-hidden="true">
        <ArrowIcon src={ArrowRight} alt=" " cacheGetRequests />
      </IconHolder>

      <PostedDate>
        <strong>Posted on {dateAsString(datePosted, 'DD MMM YYYY')}</strong>
      </PostedDate>
    </PressItem>
  );
};

const PressReleaseTemplate = ({ data, pageContext }) => {
  const posts = data.allContentfulPageAssemblyPressReleasePage.edges;

  console.log(pageContext);

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
              {posts.map(({ node }) => (
                <Item key={node.id} {...node} />
              ))}

              <Pagination data={pageContext} />
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
  pageContext: PropTypes.object,
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
        }
      }
    }
  }
`;
