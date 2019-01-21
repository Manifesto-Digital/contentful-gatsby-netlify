import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import dayjs from 'dayjs';
import styled from 'styled-components';
// Components
import Layout from '../components/layout';
import {
  Container,
  TwoThirds,
  SideBar,
  ContentWithSideBar,
} from '../components/styled/containers';
import MediaContact from '../components/media-contact';
import PaddedBox from '../components/padded-box';
import PageTitle from '../components/page-title';
import RichText from '../components/rich-text';

const PublishedDate = styled.p`
  color: ${props => props.theme.palette.grey45};
`;

const PressReleasePage = ({ data }) => {
  const {
    title,
    bodyCopy,
    notesToEditor,
    datePosted,
    showContactSideBar,
  } = data.contentfulPageAssemblyPressReleasePage;

  const formattedDate = dayjs(datePosted)
    .format('DD MMM YYYY')
    .toString();

  return (
    <Layout>
      <article>
        <Container padding={false}>
          <TwoThirds padding={false}>
            <PageTitle title={title} />
          </TwoThirds>
          <ContentWithSideBar>
            <TwoThirds>
              <PublishedDate colour="grey45">
                <strong>Published {formattedDate}</strong>
              </PublishedDate>

              <RichText richText={bodyCopy} />

              {notesToEditor && (
                <PaddedBox>
                  <h3>Notes to editors:</h3>
                  <RichText richText={notesToEditor} />
                </PaddedBox>
              )}
            </TwoThirds>
            {showContactSideBar && (
              <SideBar>
                <MediaContact />
              </SideBar>
            )}
          </ContentWithSideBar>
        </Container>
      </article>
    </Layout>
  );
};

PressReleasePage.propTypes = {
  data: PropTypes.shape({
    contentfulPageAssemblyPressReleasePage: PropTypes.object,
  }),
};

export default PressReleasePage;

export const pressReleasePageQuery = graphql`
  query pressReleasePageTemplateQuery($slug: String!) {
    contentfulPageAssemblyPressReleasePage(slug: { eq: $slug }) {
      title
      datePosted
      showContactSideBar
      showThumbnailOnListingPage
      bodyCopy {
        childContentfulRichText {
          html
        }
      }
      notesToEditor {
        childContentfulRichText {
          html
        }
      }
    }
  }
`;
