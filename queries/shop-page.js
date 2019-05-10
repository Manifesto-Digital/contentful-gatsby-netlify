const { PagesFragment } = require('./pages-fragment');

const getShopPages = async graphql =>
  graphql(`
    {
      allContentfulPageShop {
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

module.exports = { getShopPages };
