const PagesFragment = `
    ...on Node {
      ... on ContentfulPageContent {
        internal {
          type
        }
        pageInformation {
          shortDescription {
            shortDescription
          }
        }
        title
        slug
      }
      ... on ContentfulPageAdvice {
        internal {
          type
        }
        pageInformation {
          shortDescription {
            shortDescription
          }
        }
        title
        slug
      }
      ... on ContentfulPageStandardEvent {
        title
        slug
        internal {
          type
        }
        pageInformation {
          shortDescription {
            shortDescription
          }
        }
      }
      ... on ContentfulPageChallengeEvent {
        title
        slug
        internal {
          type
        }
        pageInformation {
          shortDescription {
            shortDescription
          }
        }
      }
      ... on ContentfulPagePerson {
        title
        slug
        internal {
          type
        }
        pageInformation {
          shortDescription {
            shortDescription
          }
        }
      }
      ... on ContentfulPagePolicy {
        title
        slug
        internal {
          type
        }
        pageInformation {
          shortDescription {
            shortDescription
          }
        }
      }
      ... on ContentfulPageEventsLanding {
        title
        slug
        internal {
          type
        }
        pageInformation {
          shortDescription {
            shortDescription
          }
        }
      }
      ... on ContentfulPageFurnitureShop {
        title
        slug
        internal {
          type
        }
        pageInformation {
          shortDescription {
            shortDescription
          }
        }
      }
      ... on ContentfulPagePressRelease {
        title
        slug
        internal {
          type
        }
        pageInformation {
          shortDescription {
            shortDescription
          }
        }
      }

      ... on ContentfulPageService {
        title
        slug
        internal {
          type
        }
        pageInformation {
          shortDescription {
            shortDescription
          }
        }
      }
      ... on ContentfulPageShop {
        title
        slug
        internal {
          type
        }
        pageInformation {
          shortDescription {
            shortDescription
          }
        }
      }

      ... on ContentfulPageLegal {
        slug
        title
        internal {
          type
        }
        pageInformation {
          shortDescription {
            shortDescription
          }
        }
      }
      ... on ContentfulPageLegalLanding {
        slug
        title
        internal {
          type
        }
        pageInformation {
          shortDescription {
            shortDescription
          }
        }
      }
      ... on ContentfulPageLegalHomepage {
        slug
        title
        internal {
          type
        }
        pageInformation {
          shortDescription {
            shortDescription
          }
        }
      }
    }`;

module.exports = { PagesFragment };
