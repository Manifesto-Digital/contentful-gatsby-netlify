import { graphql } from 'gatsby';

export const CardsWithIconFragment = graphql`
  fragment CardsWithIconFragment on ContentfulAssemblyCardsWithIcon {
    id
    internal {
      type
    }
    cards {
      ...CardWithIconFragment
    }
  }
`;
