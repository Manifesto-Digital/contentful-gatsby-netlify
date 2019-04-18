const getShopPages = async graphql =>
  graphql(`
    {
      allContentfulPageShop {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);

module.exports = { getShopPages };
