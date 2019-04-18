import { graphql } from 'gatsby';

export const PerksListFragment = graphql`
  fragment PerksListFragment on ContentfulComponentChallengeEventPerksList {
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
