import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
// Components
import PageTitle from '../components/page-title';
import RichText from '../components/rich-text';
// Styles
import { Container, TwoThirds } from '../components/styled/containers';
import theme from '../components/theme/variables';

const Wrapper = styled.div`
  background-color: ${theme.palette.grey10};
  padding: ${theme.spacing.medium} 0 ${theme.spacing.standard};
  margin: ${theme.spacing.large} 0 ${theme.spacing.standard};
  position: relative;
`;

const SectionTag = styled.div`
  display: inline-block;
  position: absolute;
  top: -25px;
  background-color: ${theme.palette.primary};
  color: ${theme.palette.white};
  padding: ${theme.spacing.small};
`;

const EventsLandingPage = ({ data }) => {
  const {
    pageName,
    topTextSection,
  } = data.contentfulPageAssemblyEventsLandingPage;

  return (
    <Layout>
      <article>
        <PageTitle>
          <h1>{pageName}</h1>
        </PageTitle>
        <Container>
          {topTextSection && <RichText richText={topTextSection} />}
        </Container>
        <Wrapper>
          <Container>
            <TwoThirds>
              <SectionTag>Featured events</SectionTag>
              <p>hello</p>
            </TwoThirds>
          </Container>
        </Wrapper>
      </article>
    </Layout>
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
      topTextSection {
        childContentfulRichText {
          html
        }
      }
    }
  }
`;
