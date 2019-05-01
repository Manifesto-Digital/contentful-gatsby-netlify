const getFurnitureShopPages = async graphql =>
  graphql(`
    {
      allContentfulPageFurnitureShop {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);

module.exports = { getFurnitureShopPages };
