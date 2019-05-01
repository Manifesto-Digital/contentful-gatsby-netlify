import { graphql } from 'gatsby';

export const StatsFragment = graphql`
  fragment StatsFragment on ContentfulComponentStats {
    id
    internal {
      type
    }
    displayType
    stat1Title
    stat1Subtitle
    stat1Text {
      json
    }
    stat2Title
    stat2Subtitle
    stat2Text {
      json
    }
    stat3Title
    stat3Subtitle
    stat3Text {
      json
    }
    stat4Title
    stat4Subtitle
    stat4Text {
      json
    }
  }
`;
