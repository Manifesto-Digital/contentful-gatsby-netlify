import { graphql } from 'gatsby';

export const ChallengeEventIconsFragment = graphql`
  fragment ChallengeEventIconsFragment on ContentfulTopicFullWidthChallengeEventIconBlock {
    id
    internal {
      type
    }

    headerText
    theme
    eventIcons
  }
`;
