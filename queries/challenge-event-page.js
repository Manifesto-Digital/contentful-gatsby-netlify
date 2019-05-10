const { PagesFragment } = require('./pages-fragment');

const getChallengeEventPages = async graphql =>
  graphql(`
    {
      allContentfulPageChallengeEvent {
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
module.exports = { getChallengeEventPages };
