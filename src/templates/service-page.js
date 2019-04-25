import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
// Components
import RichText from '../components/rich-text';
import ContactCard from '../components/contact-card';
import OpeningTimes from '../components/opening-times';
import Map from '../components/google-map';
// Styles
import { Container, TwoThirds } from '../components/styled/containers';
import PageTitle from '../components/page-title';

const ServicePage = ({ data }) => {
  const {
    title,
    service,
    mainBodyCopy,
    usefulInfoCopy,
    pageInformation,
  } = data.contentfulPageService;

  return (
    <Layout pageInformation={pageInformation} pageTitle={title}>
      <article>
        <PageTitle>
          <h1>{title}</h1>
        </PageTitle>
        <Container>
          <TwoThirds>
            <RichText richText={mainBodyCopy} />
            <h2>Contact</h2>
            <ContactCard data={service} />
            {service.displaySpecificLocation && (
              <Map
                insideContainer
                data={{
                  locations: [
                    {
                      location: service.searchLocation,
                      address: service.address,
                    },
                  ],
                }}
              />
            )}
            <h2>Opening times</h2>
            <OpeningTimes data={service} />
            <RichText richText={usefulInfoCopy} />
          </TwoThirds>
        </Container>
      </article>
    </Layout>
  );
};

ServicePage.propTypes = {
  data: PropTypes.shape({
    contentfulPageService: PropTypes.object,
  }),
};

export default ServicePage;

export const servicePageQuery = graphql`
  query servicePageTemplateQuery($slug: String!) {
    contentfulPageService(slug: { eq: $slug }) {
      title
      service {
        ...ServiceComponentFragment
      }
      mainBodyCopy {
        json
      }
      usefulInfoCopy {
        json
      }
      pageInformation {
        ...PageInformationFragment
      }
    }
  }
`;
