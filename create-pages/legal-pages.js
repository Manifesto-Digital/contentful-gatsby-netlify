const path = require('path');
const { getLegalPages } = require('../queries/legal-page');

async function createAdvicePages(graphql, gatsbyCreatePage) {
  const legalPageTemplate = path.resolve('src/templates/legal-page.js');

  // Create pages
  const legalPagesResponse = await getLegalPages(graphql);

  const legalPages =
    legalPagesResponse.data.allContentfulPageAssemblyLegalPage.edges;

  // Create pages
  legalPages.forEach(({ node }) => {
    if (!node.slug) return;

    gatsbyCreatePage({
      path: node.slug,
      component: legalPageTemplate,
      context: {
        slug: node.slug,
      },
    });
  });
}
module.exports = createAdvicePages;
