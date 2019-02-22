const path = require('path');
const { getEventCategoryPages } = require('../queries/event-category-page');

async function createEventCategoryPages(graphql, gatsbyCreatePage) {
  const eventCategoryPageTemplate = path.resolve(
    'src/templates/event-category-page.js'
  );

  // Create pages
  const eventCategoryPages = await getEventCategoryPages(graphql);

  if (eventCategoryPages.errors) {
    console.error(eventCategoryPages.errors);
    throw Error(eventCategoryPages.errors);
  }

  // Create pages
  eventCategoryPages.data.allContentfulPageAssemblyEventCategory.edges.forEach(
    ({ node }) => {
      if (!node.slug) return;

      gatsbyCreatePage({
        path: node.slug,
        component: eventCategoryPageTemplate,
        context: {
          slug: node.slug,
          type: node.eventType,
        },
      });
    }
  );
}

module.exports = createEventCategoryPages;
