import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
// Components
import PageTitle from '../../components/page-title';
import RichText from '../../components/rich-text';
// Styles
import { Container, TwoThirds } from '../../components/styled/containers';
import { SectionTag } from '../../components/styled/tags';
import EventCard from '../../components/event-card';
import { Wrapper, CardWrapper } from './styles';

const EventsLandingPage = ({ data }) => {
  const {
    title,
    topTextSection,
    featuredEvents,
    pageInformation,
  } = data.contentfulPageEventsLanding;

  return (
    <Layout pageInformation={pageInformation} pageTitle={title}>
      <article>
        <PageTitle>
          <h1>{title}</h1>
        </PageTitle>
        <Container>
          {topTextSection && <RichText richText={topTextSection} />}
        </Container>
        <Wrapper>
          <Container>
            <TwoThirds>
              <SectionTag>Featured events</SectionTag>
              {featuredEvents && featuredEvents.length > 0 && (
                <CardWrapper>
                  {featuredEvents.map((featuredEvent, key) => (
                    <EventCard key={key} data={featuredEvent} />
                  ))}
                </CardWrapper>
              )}
            </TwoThirds>
          </Container>
        </Wrapper>
      </article>
    </Layout>
  );
};

EventsLandingPage.propTypes = {
  data: PropTypes.shape({
    contentfulPageEventsLanding: PropTypes.object,
  }),
};

export default EventsLandingPage;

export const eventsLandingPageQuery = graphql`
  query eventsLandingPageTemplateQuery($slug: String!) {
    contentfulPageEventsLanding(slug: { eq: $slug }) {
      title
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
          ...LinkFragment
        }
        secondaryCtaText
      }
      pageInformation {
        ...PageInformationFragment
      }
    }
  }
`;
