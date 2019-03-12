const path = require('path');
const { getFurnitureShopPages } = require('../queries/furniture-shop-page');

async function createFurnitureShopPages(graphql, gatsbyCreatePage) {
  const standardEventPageTemplate = path.resolve(
    'src/templates/furniture-shop-page.js'
  );

  // Create pages
  const pages = await getFurnitureShopPages(graphql);

  if (pages.errors) {
    console.error(pages.errors);
    throw Error(pages.errors);
  }

  // Create pages
  pages.data.allContentfulPageAssemblyFurnitureShopPage.edges.forEach(
    ({ node }) => {
      if (!node.slug) return;

      gatsbyCreatePage({
        path: node.slug,
        component: standardEventPageTemplate,
        context: {
          slug: node.slug,
        },
      });
    }
  );
}

module.exports = createFurnitureShopPages;