const { PagesFragment } = require('./pages-fragment');

const getPressReleasePages = async graphql =>
  graphql(`
    {
      allContentfulPagePressRelease {
        edges {
          node {
            title
            id
            slug
            menuParent {
              ... on ContentfulComponentUrlHierarchy {
                menuItem {
                  ${PagesFragment}
                }
              }
            }
            datePosted
            showContactSideBar
            showThumbnailOnListingPage
            bodyCopy {
              json
            }
            notesToEditor {
              json
            }
          }
        }
      }
    }
  `);

module.exports = { getPressReleasePages };
