const { PagesFragment } = require('./pages-fragment');

const getEventCategoryPages = async graphql =>
  graphql(`
    {
      allContentfulPageEventCategory {
        edges {
          node {
            id
            slug
            eventType
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

module.exports = { getEventCategoryPages };
