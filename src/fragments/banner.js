import { graphql } from 'gatsby'

export const BannerTopicFragment = graphql`
  fragment BannerTopicFragment on ContentfulTopicBanner {
    id
    name
    headerText
    linkText
    internalLink {
      id
      slug

      internal {
        type
      }
    }
    externalUrl
    bannerColour
    internal {
      type
    }
    removeMarginBottom
  }
`
