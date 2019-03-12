import { graphql } from 'gatsby';

export const StatsFragment = graphql`
  fragment StatsFragment on ContentfulTopicStats {
    id
    internal {
      type
    }
    displayType
    stat1Title
    stat1Subtitle
    stat1Text {
      childContentfulRichText {
        html
      }
    }
    stat2Title
    stat2Subtitle
    stat2Text {
      childContentfulRichText {
        html
      }
    }
    stat3Title
    stat3Subtitle
    stat3Text {
      childContentfulRichText {
        html
      }
    }
    stat4Title
    stat4Subtitle
    stat4Text {
      childContentfulRichText {
        html
      }
    }
  }
`;
