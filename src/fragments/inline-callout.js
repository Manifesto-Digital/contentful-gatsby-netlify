import { graphql } from 'gatsby'

export const InlineCallout = graphql`
  fragment InlineCallout on ContentfulTopicInlineCallout {
    id
    name
    icon
    internal {
      type
    }
    content {
      childContentfulRichText {
        html
      }
    }
  }
`
