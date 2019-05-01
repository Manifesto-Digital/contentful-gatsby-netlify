import { graphql } from 'gatsby';

export const InlineCallout = graphql`
  fragment InlineCallout on ContentfulComponentInlineCallout {
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
      json
    }
  }
`;
