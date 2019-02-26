const getShopPages = async graphql =>
  graphql(`
    {
      allContentfulPageAssemblyShopPage {
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
