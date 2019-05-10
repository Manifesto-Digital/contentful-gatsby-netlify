const { PagesFragment } = require('./pages-fragment');

const getStandardEventPages = async graphql =>
  graphql(`
    {
      allContentfulPageStandardEvent {
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

module.exports = { getStandardEventPages };
