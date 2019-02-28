import { graphql } from 'gatsby';

export const PageInformationFragment = graphql`
  fragment PageInformationFragment on ContentfulTopicPageMetaInformation {
    id
    seoTitle
    seoDescription {
      internal {
        content
        type
      }
    }
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
