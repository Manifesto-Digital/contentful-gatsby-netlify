import { graphql } from 'gatsby'

export const VideoTopicFragment = graphql`
  fragment VideoTopicFragment on ContentfulTopicVideoEmbed {
    id
    createdAt
    name
    externalUrl
    title
    metaDescription
    bottomText {
      childContentfulRichText {
        html
      }
    }
    removeMarginBottom
    internal {
      type
    }
  }
`
