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
    bannerFlow
    contentCards {
      ... on ContentfulPageAssemblyContentPage {
        id
        slug
        title
        cropImageFrom
        pageInformation {
          shortDescription {
            shortDescription
          }
          pageThumbnail {
            id
            description
            file {
              url
              fileName
            }
          }
        }
      }
    }
  }
`;
