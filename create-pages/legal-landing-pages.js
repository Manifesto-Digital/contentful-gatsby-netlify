const path = require('path');
const { getLegalLandingPages } = require('../queries/legal-landing-page');

async function createLegalLandingPages(graphql, gatsbyCreatePage) {
  const legalLandingPageTemplate = path.resolve(
    'src/templates/legal-landing-page.js'
  );

  // Create pages
  const legalLandingPages = await getLegalLandingPages(graphql);

  if (legalLandingPages.errors) {
    console.error(legalLandingPages.errors);
    throw Error(legalLandingPages.errors);
  }

  // Create pages
  legalLandingPages.data.allContentfulPageAssemblyLegalLandingPage.edges.forEach(
    ({ node }) => {
      if (!node.slug) return;

      gatsbyCreatePage({
        path: node.slug,
        component: legalLandingPageTemplate,
        context: {
          slug: node.slug,
        },
      });
    }
  );
}

module.exports = createLegalLandingPages;
