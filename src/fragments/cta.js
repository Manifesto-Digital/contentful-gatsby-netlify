import { graphql } from 'gatsby';

export const ctaStandardFragment = graphql`
  fragment ctaStandardFragment on ContentfulTopicStandardCta {
    id
    name
    ctaColour
    internalLink {
      id
      slug

      internal {
        type
      }
    }
    externalLink {
      id
      internal {
        type
      }
      URL
      newTab
    }
    buttonText
  }
`;

export const ctaWithIconFragment = graphql`
  fragment ctaWithIconFragment on ContentfulTopicCtaWithIcon {
    id
    name
    ctaColour
    internalLink {
      id
      slug

      internal {
        type
      }
    }
    externalLink {
      id
      internal {
        type
      }
      URL
      newTab
    }
    buttonText
    icon {
      id
      file {
        url
        fileName
        contentType
      }
    }
  }
`;
