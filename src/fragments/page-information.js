import { graphql } from 'gatsby';

export const PageInformationFragment = graphql`
  fragment PageInformationFragment on ContentfulComponentPageMetaInformation {
    id
    seoTitle
    seoDescription {
      internal {
        content
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
  }
`;
