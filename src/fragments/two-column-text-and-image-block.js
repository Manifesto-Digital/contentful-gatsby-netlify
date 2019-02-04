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
      ...InlineCallout
    }

    rightColumnImage {
      file {
        url
        fileName
      }
      description
    }
    rightColumnCalloutBanners {
      ...InlineCallout
    }

    theme
  }
`;
