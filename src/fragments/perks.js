import { graphql } from 'gatsby';

export const PerksListFragment = graphql`
  fragment PerksListFragment on ContentfulTopicChallengeEventPerksList {
    id
    internal {
      type
    }

    headerText
    backgroundColour
    eventIcons
    removeBottomMargin
  }
`;
