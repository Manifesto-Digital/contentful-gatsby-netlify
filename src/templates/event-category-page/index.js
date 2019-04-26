import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
// Components
import PageTitle from '../../components/page-title';
import RichText from '../../components/rich-text';
import FeaturedEvent from '../../components/featured-event';
import EventListCard from '../../components/event-list-card';
import SideBarAssemblies from '../../components/assemblies/sidebar';
// Styles
import {
  Container,
  ContentWithSideBar,
  TwoThirds,
  SideBar,
} from '../../components/styled/containers';
import { IntroWrapper, OtherEventsWrapper } from './styles';
import { SectionTag } from '../../components/styled/tags';

const EventCategoryPage = ({ data }) => {
  const {
    title,
    strapline,
    summary,
    featuredEvent,
    sidebarAssemblies,
    pageInformation,
  } = data.contentfulPageEventCategory;

  const standardEventPages = data.allContentfulPageStandardEvent.edges || [];
  const challengeEventPages = data.allContentfulPageChallengeEvent.edges || [];

  const events = standardEventPages
    .concat(challengeEventPages)
    .map(event => event.node)
    .filter(event =>
      featuredEvent ? event.slug !== featuredEvent[0].slug : true
    );

  return (
    <Layout pageInformation={pageInformation} pageTitle={title}>
      <article>
        <PageTitle>
          <h1>{title}</h1>
        </PageTitle>
        <Container>
          <IntroWrapper>
            {strapline && <h3>{strapline}</h3>}
            {summary && <RichText richText={summary} />}
          </IntroWrapper>

          {featuredEvent && <FeaturedEvent data={featuredEvent[0]} />}
        </Container>

        {events && (
          <OtherEventsWrapper>
            <Container>
              <SectionTag>Other events</SectionTag>
              <ContentWithSideBar>
                <TwoThirds>
                  {events.map((event, key) => (
                    <EventListCard data={event} key={key} />
                  ))}
                </TwoThirds>
                <SideBar>
                  <SideBarAssemblies assemblies={sidebarAssemblies} />
                </SideBar>
              </ContentWithSideBar>
            </Container>
          </OtherEventsWrapper>
        )}
      </article>
    </Layout>
  );
};

EventCategoryPage.propTypes = {
  data: PropTypes.shape({
    contentfulPageEventCategory: PropTypes.object,
    allContentfulDataEvent: PropTypes.object,
  }),
};

export default EventCategoryPage;

export const eventCategoryPageQuery = graphql`
  query eventCategoryPageTemplateQuery($slug: String!, $type: String!) {
    contentfulPageEventCategory(slug: { eq: $slug }) {
      title
      strapline
      summary {
        json
      }
      featuredEvent {
        ... on Node {
          ... on ContentfulPageChallengeEvent {
            slug
            event {
              ...EventFragment
            }
          }
          ... on ContentfulPageStandardEvent {
            slug
            mainCtaText
            event {
              ...EventFragment
            }
          }
        }
      }
      sidebarAssemblies {
        ...SidebarFragment
      }
      pageInformation {
        ...PageInformationFragment
      }
    }

    allContentfulPageStandardEvent(
      filter: { event: { eventType: { eq: $type } } }
    ) {
      edges {
        node {
          slug
          event {
            eventName
            displayLocation
            eventDisplayDate
            eventSystemDate
            thumbnailImage {
              file {
                url
              }
            }
          }
        }
      }
    }

    allContentfulPageChallengeEvent(
      filter: { event: { eventType: { eq: $type } } }
    ) {
      edges {
        node {
          slug
          event {
            eventName
            displayLocation
            eventDisplayDate
            eventSystemDate
            thumbnailImage {
              file {
                url
              }
            }
          }
        }
      }
    }
  }
`;
