import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
// Components
import RichText from '../components/rich-text';
import ContactCard from '../components/contact-card';
// Styles
import { Container, TwoThirds } from '../components/styled/containers';
import PageTitle from '../components/page-title';

const ServicePage = ({ data }) => {
  const {
    title,
    service,
    mainBodyCopy,
    usefulInfoCopy,
  } = data.contentfulPageAssemblyServicePage;

  return (
    <Layout>
      <article>
        <PageTitle>
          <h1>{title}</h1>
        </PageTitle>
        <Container>
          <TwoThirds>
            <RichText richText={mainBodyCopy} />
            <h2>Contact</h2>
            <ContactCard data={service} />
            <h2>Opening times</h2>
            <RichText richText={usefulInfoCopy} />
          </TwoThirds>
        </Container>
      </article>
    </Layout>
  );
};

ServicePage.propTypes = {
  data: PropTypes.shape({
    contentfulPageAssemblyServicePage: PropTypes.object,
  }),
};

export default ServicePage;

export const servicePageQuery = graphql`
  query servicePageTemplateQuery($slug: String!) {
    contentfulPageAssemblyServicePage(slug: { eq: $slug }) {
      title
      service {
        ...ServiceTopicFragment
      }
      mainBodyCopy {
        childContentfulRichText {
          html
        }
      }
      usefulInfoCopy {
        childContentfulRichText {
          html
        }
      }
    }
  }
`;
