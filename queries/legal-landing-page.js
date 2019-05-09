const { PagesFragment } = require('./pages-fragment');

const getLegalLandingPages = async graphql =>
  graphql(`
    {
      allContentfulPageLegalLanding {
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

module.exports = { getLegalLandingPages };
