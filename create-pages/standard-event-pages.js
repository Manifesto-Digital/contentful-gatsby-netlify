const path = require('path');
const { getStandardEventPages } = require('../queries/standard-event-page');

async function createContentPages(graphql, gatsbyCreatePage) {
  const standardEventPageTemplate = path.resolve(
    'src/templates/standard-event-page.js'
  );

  // Create pages
  const pages = await getStandardEventPages(graphql);

  if (pages.errors) {
    console.error(pages.errors);
    throw Error(pages.errors);
  }

  // Create pages
  pages.data.allContentfulPageStandardEvent.edges.forEach(({ node }) => {
    if (!node.slug) return;

    gatsbyCreatePage({
      path: node.slug,
      component: standardEventPageTemplate,
      context: {
        slug: node.slug,
      },
    });
  });
}

module.exports = createContentPages;
