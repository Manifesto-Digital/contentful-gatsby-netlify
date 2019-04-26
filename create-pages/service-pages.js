const path = require('path');
const { getServicePages } = require('../queries/service-page');

async function createServicePages(graphql, gatsbyCreatePage) {
  const servicePageTemplate = path.resolve('src/templates/service-page.js');

  // Create pages
  const servicePages = await getServicePages(graphql);

  if (servicePages.errors) {
    console.error(servicePages.errors);
    throw Error(servicePages.errors);
  }

  // Create pages
  servicePages.data.allContentfulPageService.edges.forEach(({ node }) => {
    if (!node.slug) return;

    gatsbyCreatePage({
      path: node.slug,
      component: servicePageTemplate,
      context: {
        slug: node.slug,
      },
    });
  });
}

module.exports = createServicePages;
