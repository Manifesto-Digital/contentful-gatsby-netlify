const path = require('path');
const { getLegalHomepage } = require('../queries/legal-homepage');

async function createLegalHomepage(graphql, gatsbyCreatePage) {
  const legalHomepageTemplate = path.resolve('src/templates/legal-homepage.js');

  // Create pages
  const legalHomepage = await getLegalHomepage(graphql);

  if (legalHomepage.errors) {
    console.error(legalHomepage.errors);
    throw Error(legalHomepage.errors);
  }

  // Create pages
  const homepage = legalHomepage.data.contentfulPageLegalHomepage;

  if (!homepage || !homepage.slug) return;
  gatsbyCreatePage({
    path: homepage.slug,
    component: legalHomepageTemplate,
    context: {
      slug: homepage.slug,
    },
  });
}

module.exports = createLegalHomepage;
