import { graphql } from 'gatsby'

export const VideoTopicFragment = graphql`
  fragment VideoTopicFragment on ContentfulTopicVideoEmbed {
    id
    createdAt
    name
    externalUrl
    title
    bottomText {
      content {
        content {
          value
        }
      }
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
