const { PagesFragment } = require('./pages-fragment');

const getFurnitureShopPages = async graphql =>
  graphql(`
    {
      allContentfulPageFurnitureShop {
        edges {
          node {
            id
            slug
              menuParent {
              ... on ContentfulComponentUrlHierarchy {
                menuItem {
                  ${PagesFragment}
                }
              }
            }
          }
        }
      }
    }
  `);

module.exports = { getFurnitureShopPages };
