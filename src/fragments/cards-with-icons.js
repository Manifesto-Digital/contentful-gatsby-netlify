import { graphql } from 'gatsby';

export const CardsWithIconsFragment = graphql`
  fragment CardsWithIconsFragment on ContentfulAssemblyCardsWithIcon {
    id
    internal {
      type
    }
    cards {
      ...CardWithIconFragment
    }
  }
`;
