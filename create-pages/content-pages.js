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
  pages.data.allContentfulPageAssemblyContentPage.edges.forEach(edge => {
    if (!edge.slug) return;

    gatsbyCreatePage({
      path: edge.node.slug,
      component: contentPageTemplate,
      context: {
        slug: edge.node.slug,
      },
    });
  });
}

module.exports = createContentPages;
