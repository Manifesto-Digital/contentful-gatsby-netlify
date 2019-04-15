import { graphql } from 'gatsby';

export const LinkFragment = graphql`
  fragment LinkFragment on Node {
    ... on ContentfulTopicExternalLink {
      internal {
        type
      }
      title
      URL
      newTab
    }
    ... on ContentfulPageAssemblyContentPage {
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
    ... on ContentfulPageAssemblyAdvicePage {
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
    ... on ContentfulPageAssemblyStandardEvent {
      name
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
    ... on ContentfulPageAssemblyChallengeEvent {
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
    ... on ContentfulPageAssemblyPerson {
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
    ... on ContentfulPageAssemblyPolicyPage {
      pageName
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
    ... on ContentfulPageAssemblyEventsLandingPage {
      pageName
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
    ... on ContentfulPageAssemblyFurnitureShopPage {
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
    ... on ContentfulPageAssemblyPressReleasePage {
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

    ... on ContentfulPageAssemblyServicePage {
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
    ... on ContentfulPageAssemblyShopPage {
      name
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

    ... on ContentfulPageAssemblyLegalPage {
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
    ... on ContentfulPageAssemblyLegalLandingPage {
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
  }
`;
