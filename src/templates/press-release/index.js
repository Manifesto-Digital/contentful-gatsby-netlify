import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { dateAsString } from '../../utils/dates';
// Components
import Layout from '../../components/layout';
import {
  Container,
  TwoThirds,
  SideBar,
  ContentWithSideBar,
} from '../../components/styled/containers';
import MediaContact from '../../components/media-contact';
import PaddedBox from '../../components/padded-box';
import PageTitle from '../../components/page-title';
import RichText from '../../components/rich-text';
// Styles
import { PublishedDate } from './styles';

const PressReleasePage = ({ data }) => {
  const {
    title,
    bodyCopy,
    notesToEditor,
    datePosted,
    showContactSideBar,
    pageInformation,
  } = data.contentfulPagePressRelease;

  const formattedDate = dateAsString(datePosted, 'DD MMM YYYY');

  let relatedFiles = data.contentfulPagePressRelease.downloads || null;

  if (relatedFiles) {
    relatedFiles = relatedFiles[0].files;
  }

  const DownloadsList = ({ files }) => {
    /* eslint-disable  react/no-danger */
    const list = {
      __html: files
        .map(
          item =>
            `<li><a href="${item.file.url}" title="${item.title}">${
              item.title
            }</a></li>`
        )
        .join(''),
    };
    /* eslint-disable  react/no-danger */
    return (
      <>
        <h3>Downloads</h3>
        <ul dangerouslySetInnerHTML={list} />
      </>
    );
  };

  DownloadsList.propTypes = {
    files: PropTypes.array,
  };

  return (
    <Layout pageInformation={pageInformation} pageTitle={title}>
      <article>
        <PageTitle twoThirds>
          <h1>{title}</h1>
        </PageTitle>
        <Container>
          <ContentWithSideBar>
            <TwoThirds padding>
              <PublishedDate colour="grey45">
                <strong>Posted {formattedDate}</strong>
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
                {relatedFiles && <DownloadsList files={relatedFiles} />}
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
    contentfulPagePressRelease: PropTypes.object,
  }),
};

export default PressReleasePage;

export const pressReleasePageQuery = graphql`
  query pressReleasePageTemplateQuery($slug: String!) {
    contentfulPagePressRelease(slug: { eq: $slug }) {
      title
      datePosted
      showContactSideBar
      showThumbnailOnListingPage
      bodyCopy {
        json
      }
      notesToEditor {
        json
      }
      downloads {
        files {
          title
          file {
            url
            fileName
            contentType
          }
        }
      }
      pageInformation {
        ...PageInformationFragment
      }
    }
  }
`;
