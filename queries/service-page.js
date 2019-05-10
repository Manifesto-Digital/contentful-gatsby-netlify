const { PagesFragment } = require('./pages-fragment');

const getServicePages = async graphql =>
  graphql(`
    {
      allContentfulPageService {
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

module.exports = { getServicePages };
