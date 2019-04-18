const { PagesFragment } = require('./pages-fragment');

const getLegalPages = async graphql =>
  graphql(`
    {
      allContentfulPageLegal {
        edges {
          node {
            id
            slug
            title
            pageInformation {
              shortDescription {
                shortDescription
              }
            }
            menuParent {
              ... on ContentfulTopicUrlHierarchy {
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

module.exports = { getLegalPages };
