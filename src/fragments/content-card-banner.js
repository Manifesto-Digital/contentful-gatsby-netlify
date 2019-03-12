import { graphql } from 'gatsby';

export const ContentCardBannerFragment = graphql`
  fragment ContentCardBannerFragment on ContentfulAssemblyContentCardsBanner {
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
        pageInformation {
          shortDescription {
            shortDescription
          }
          taxonomyColour
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
