const getFurnitureShopPages = async graphql =>
  graphql(`
    {
      allContentfulPageAssemblyFurnitureShopPage {
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
