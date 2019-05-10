const { PagesFragment } = require('./pages-fragment');

const getPersonPages = async graphql =>
  graphql(`
    {
      allContentfulPagePerson {
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
            person {
              id
              category
            }
          }
        }
      }
    }
  `);

module.exports = { getPersonPages };
