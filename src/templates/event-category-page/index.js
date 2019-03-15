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
    pageName,
    strapline,
    summary,
    featuredEvent,
    sidebarAssemblies,
    pageInformation,
  } = data.contentfulPageAssemblyEventCategory;

  const standardEventPages =
    data.allContentfulPageAssemblyStandardEvent.edges || [];
  const challengeEventPages =
    data.allContentfulPageAssemblyChallengeEvent.edges || [];

  const events = standardEventPages
    .concat(challengeEventPages)
    .map(event => event.node)
    .filter(event =>
      featuredEvent ? event.slug !== featuredEvent[0].slug : true
    );

  return (
    <Layout pageInformation={pageInformation} pageTitle={pageName}>
      <article>
        <PageTitle>
          <h1>{pageName}</h1>
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
    contentfulPageAssemblyEventCategory: PropTypes.object,
    allContentfulTopicEvent: PropTypes.object,
  }),
};

export default EventCategoryPage;

export const eventCategoryPageQuery = graphql`
  query eventCategoryPageTemplateQuery($slug: String!, $type: String!) {
    contentfulPageAssemblyEventCategory(slug: { eq: $slug }) {
      pageName
      strapline
      summary {
        childContentfulRichText {
          html
        }
      }
      featuredEvent {
        slug
        mainCtaText
        event {
          eventName
          displayLocation
          eventDisplayDate
          eventSystemDate
          distance
          thumbnailImage {
            file {
              url
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

    allContentfulPageAssemblyStandardEvent(
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

    allContentfulPageAssemblyChallengeEvent(
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
