const path = require('path');
const { getContentPages } = require('../queries/content-page');

async function createContentPages(graphql, gatsbyCreatePage) {
  const contentPageTemplate = path.resolve('src/templates/page.js');

  // Create pages
  const pages = await getContentPages(graphql);

  if (pages.errors) {
    console.error(pages.errors);
    throw Error(pages.errors);
  }

  // Create pages
  pages.data.allContentfulPageContent.edges.forEach(({ node }) => {
    if (!node.slug) return;
    gatsbyCreatePage({
      path: node.slug,
      component: contentPageTemplate,
      context: {
        slug: node.slug,
      },
    });
  });
}

module.exports = createContentPages;
