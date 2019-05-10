const { PagesFragment } = require('./pages-fragment');

const getEventsLandingPages = async graphql =>
  graphql(`
    {
      allContentfulPageEventsLanding {
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

module.exports = { getEventsLandingPages };
