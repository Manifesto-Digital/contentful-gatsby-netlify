const path = require('path');
const { getEventsLandingPages } = require('../queries/events-landing-page');

async function createEventsLandingPages(graphql, gatsbyCreatePage) {
  const eventsLandingPageTemplate = path.resolve(
    'src/templates/events-landing-page/index.js'
  );

  // Create pages
  const eventLandingPages = await getEventsLandingPages(graphql);

  if (eventLandingPages.errors) {
    console.error(eventLandingPages.errors);
    throw Error(eventLandingPages.errors);
  }

  // Create pages
  eventLandingPages.data.allContentfulPageEventsLanding.edges.forEach(
    ({ node }) => {
      if (!node.slug) return;

      gatsbyCreatePage({
        path: node.slug,
        component: eventsLandingPageTemplate,
        context: {
          slug: node.slug,
          title: node.title,
          topTextSection: node.topTextSection,
          featuredEvents: node.featuredEvents,
        },
      });
    }
  );
}

module.exports = createEventsLandingPages;
