import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
// Components
import Hero from '../components/hero';
import RichText from '../components/rich-text';
import Assemblies from '../components/assemblies';
// Styles
import { Container } from '../components/styled/containers';

const EventsLandingPage = ({ data }) => {
  // const {
  //   bodyCopy,
  //   heroContent,
  //   assemblies,
  // } = data.contentfulPageAssemblyEventsLandingPage;

  return (
    <></>
    // <Layout>
    //   <article>
    //     {heroContent && <Hero content={heroContent[0]} />}
    //     <section>
    //       <Container>{bodyCopy && <RichText richText={bodyCopy} />}</Container>
    //     </section>
    //     <Assemblies assemblies={assemblies} />
    //   </article>
    // </Layout>
  );
};

EventsLandingPage.propTypes = {
  data: PropTypes.shape({
    contentfulPageAssemblyEventsLandingPage: PropTypes.object,
  }),
};

export default EventsLandingPage;

export const eventsLandingPageQuery = graphql`
  query eventsLandingPageTemplateQuery($slug: String!) {
    contentfulPageAssemblyEventsLandingPage(slug: { eq: $slug }) {
      pageName
    }
  }
`;
