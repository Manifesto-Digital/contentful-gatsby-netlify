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
      title
      slug
    }
    ... on ContentfulPageAssemblyAdvicePage {
      internal {
        type
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
    }
    ... on ContentfulPageAssemblyChallengeEvent {
      title
      slug
      internal {
        type
      }
    }
    ... on ContentfulPageAssemblyPerson {
      title
      slug
      internal {
        type
      }
    }
    ... on ContentfulPageAssemblyPolicyPage {
      pageName
      slug
      internal {
        type
      }
    }
    ... on ContentfulPageAssemblyEventsLandingPage {
      pageName
      slug
      internal {
        type
      }
    }
    ... on ContentfulPageAssemblyFurnitureShopPage {
      title
      slug
      internal {
        type
      }
    }
    ... on ContentfulPageAssemblyPressReleasePage {
      title
      slug
      internal {
        type
      }
    }

    ... on ContentfulPageAssemblyServicePage {
      title
      slug
      internal {
        type
      }
    }
    ... on ContentfulPageAssemblyShopPage {
      name
      slug
      internal {
        type
      }
    }

    ... on ContentfulPageAssemblyLegalPage {
      slug
      title
      internal {
        type
      }
    }
  }
`;
