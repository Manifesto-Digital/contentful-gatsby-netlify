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
      slug
      internal {
        type
      }
    }
    ... on ContentfulPageAssemblyPolicyPage {
      slug
      internal {
        type
      }
    }
    ... on ContentfulPageAssemblyEventsLandingPage {
      slug
      internal {
        type
      }
    }
    ... on ContentfulPageAssemblyFurnitureShopPage {
      slug
      internal {
        type
      }
    }
    ... on ContentfulPageAssemblyPressReleasePage {
      slug
      internal {
        type
      }
    }
    ... on ContentfulPageAssemblyPressReleasePage {
      slug
      internal {
        type
      }
    }
    ... on ContentfulPageAssemblyServicePage {
      slug
      internal {
        type
      }
    }
    ... on ContentfulPageAssemblyShopPage {
      slug
      internal {
        type
      }
    }
  }
`;
