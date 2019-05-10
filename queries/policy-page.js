const { PagesFragment } = require('./pages-fragment');

const getPolicyPages = async graphql =>
  graphql(`
    {
      allContentfulPagePolicy {
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

module.exports = { getPolicyPages };
