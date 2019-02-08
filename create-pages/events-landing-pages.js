const path = require('path');
const { getEventsLandingPages } = require('../queries/events-landing-page');

async function createEventsLandingPages(graphql, gatsbyCreatePage) {
  const eventsLandingPageTemplate = path.resolve(
    'src/templates/events-landing-page.js'
  );

  // Create pages
  const pages = await getEventsLandingPages(graphql);

  if (pages.errors) {
    console.error(pages.errors);
    throw Error(pages.errors);
  }

  // Create pages
  pages.data.allContentfulPageAssemblyEventsLandingPage.edges.forEach(
    ({ node }) => {
      if (!node.slug) return;

      gatsbyCreatePage({
        path: node.slug,
        component: eventsLandingPageTemplate,
        context: {
          slug: node.slug,
        },
      });
    }
  );
}

module.exports = createEventsLandingPages;
