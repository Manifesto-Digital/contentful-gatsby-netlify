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
      ... on ContentfulPageAssemblyContentPage {
        id
        slug
        title
        summaryText
        cropImageFrom
        featuredImage {
          id
          description
          file {
            url
            fileName
          }
        }
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
