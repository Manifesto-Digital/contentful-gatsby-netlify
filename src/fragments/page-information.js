import { graphql } from 'gatsby';

export const PageInformationFragment = graphql`
  fragment PageInformationFragment on ContentfulTopicPageMetaInformation {
    id
    seoTitle
    seoDescription {
      internal {
        type
      }
    }
    taxonomyColour
    pageThumbnail {
      ...ImageFragment
    }
    shortDescription {
      internal {
        content
      }
    }
    longDescription {
      internal {
        content
      }
    }
  }
`;
