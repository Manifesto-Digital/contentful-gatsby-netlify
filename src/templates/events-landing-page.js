import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
// Components
import PageTitle from '../components/page-title';
import RichText from '../components/rich-text';
// Styles
import { Container, TwoThirds } from '../components/styled/containers';
import EventCard from '../components/event-card';
import {
  Wrapper,
  SectionTag,
  CardWrapper,
} from '../components/events-landing-page/styles';

const EventsLandingPage = ({ data }) => {
  const {
    pageName,
    topTextSection,
    featuredEvents,
  } = data.contentfulPageAssemblyEventsLandingPage;

  if (!featuredEvents || featuredEvents.length === 0) return;

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
              <CardWrapper>
                {featuredEvents.map((featuredEvent, key) => (
                  <EventCard key={key} data={featuredEvent} />
                ))}
              </CardWrapper>
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
      featuredEvents {
        event {
          eventName
          thumbnailImage {
            file {
              url
            }
          }
        }
        cardText
        primaryCtaText
        primaryCtaLink {
          ... on Node {
            ... on ContentfulPageAssemblyChallengeEvent {
              slug
            }
            ... on ContentfulPageAssemblyStandardEvent {
              slug
            }
          }
        }
        secondaryCtaText
        secondaryCtaLink {
          slug
        }
      }
    }
  }
`;
