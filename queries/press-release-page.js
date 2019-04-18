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
