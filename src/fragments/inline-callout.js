import { graphql } from 'gatsby';

export const InlineCallout = graphql`
  fragment InlineCallout on ContentfulTopicInlineCallout {
    id
    name
    icon
    borderColour
    bannerColour
    internal {
      type
    }
    removeMarginBottom
    content {
      childContentfulRichText {
        html
      }
    }
  }
`;
