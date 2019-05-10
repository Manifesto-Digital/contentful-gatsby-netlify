const path = require('path');
const { getShopPages } = require('../queries/shop-page');

async function createShopPages(graphql, gatsbyCreatePage) {
  const shopPageTemplate = path.resolve('src/templates/shop-page.js');

  // Create pages
  const shopPages = await getShopPages(graphql);

  if (shopPages.errors) {
    console.error(shopPages.errors);
    throw Error(shopPages.errors);
  }

  // Create pages
  shopPages.data.allContentfulPageShop.edges.forEach(({ node }) => {
    if (!node.slug) return;
    const { menuParent, slug } = node;

    gatsbyCreatePage({
      path: node.slug,
      component: shopPageTemplate,
      context: {
        slug,
        menuParent,
      },
    });
  });
}

module.exports = createShopPages;
