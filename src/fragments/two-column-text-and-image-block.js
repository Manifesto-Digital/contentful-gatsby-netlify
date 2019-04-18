import { graphql } from 'gatsby';

export const TwoColumnTextAndImageBlockFragment = graphql`
  fragment TwoColumnTextAndImageBlockFragment on ContentfulTopicTwoColumnTextAndImageBlock {
    id
    internal {
      type
    }
    systemName
    headerText
    leftColumnText {
      json
    }
    leftColumnCalloutBanners {
      ...InlineCallout
    }
    rightColumnText {
      json
    }
    rightColumnCta {
      ...ctaStandardFragment
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
    backgroundColour
    removeMarginBottom
  }
`;
