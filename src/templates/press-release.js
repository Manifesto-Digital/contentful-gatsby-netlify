import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
// Components
import Layout from '../components/layout';
import { Container, TwoThirds } from '../components/styled/containers';
import PageTitle from '../components/page-title';
import RichText from '../components/rich-text';

const PressReleasePage = ({ data }) => {
  const {
    title,
    bodyCopy,
    notesToEditor,
  } = data.contentfulPageAssemblyPressReleasePage;

  return (
    <Layout>
      <article>
        <PageTitle title={title} />
        <Container>
          <TwoThirds>{bodyCopy && <RichText richText={bodyCopy} />}</TwoThirds>
          <TwoThirds>
            <h3>Notes to editor</h3>
            {notesToEditor && <RichText richText={notesToEditor} />}
          </TwoThirds>
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
