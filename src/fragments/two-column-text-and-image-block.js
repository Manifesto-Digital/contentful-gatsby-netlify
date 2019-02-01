import { graphql } from 'gatsby';

export const TwoColumnTextAndImageBlockFragment = graphql`
  fragment TwoColumnTextAndImageBlockFragment on ContentfulTopicTwoColumnTextAndImageBlock {
    id
    internal {
      type
    }
    systemName

    headerText

    childContentfulTopicTwoColumnTextAndImageBlockLeftColumnTextRichTextNode {
      childContentfulRichText {
        html
      }
    }
    leftColumnCalloutBanners {
      ... on ContentfulTopicInlineCallout {
        ...InlineCallout
      }
    }

    rightColumnImage {
      file {
        url
        fileName
      }
      description
    }
    rightColumnCalloutBanners {
      ... on ContentfulTopicInlineCallout {
        ...InlineCallout
      }
    }

    theme
  }
`;
