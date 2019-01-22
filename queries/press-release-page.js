const getPressReleasePages = async graphql =>
  graphql(`
    {
      allContentfulPageAssemblyPressReleasePage {
        edges {
          node {
            title
            id
            slug
            datePosted
            showContactSideBar
            showThumbnailOnListingPage
            bodyCopy {
              childContentfulRichText {
                html
              }
            }
            notesToEditor {
              childContentfulRichText {
                html
              }
            }
          }
        }
      }
    }
  `);

module.exports = { getPressReleasePages };
