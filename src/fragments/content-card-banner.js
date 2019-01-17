import { graphql } from 'gatsby';

export const ContentCardBannerFragment = graphql`
  fragment ContentCardBannerFragment on ContentfulTopicContentCardsBanner {
    id
    internal {
      type
    }
    header {
      id
      childContentfulRichText {
        html
      }
    }
    bannerColour
    contentCards {
      id
      slug
      title
      featuredImage {
        id
        description
        file {
          url
          fileName
        }
      }
      summaryText
    }
  }
`;
