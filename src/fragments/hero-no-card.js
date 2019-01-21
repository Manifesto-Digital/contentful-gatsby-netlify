import { graphql } from 'gatsby';

export const HeroNoCardFragment = graphql`
  fragment HeroNoCardFragment on ContentfulTopicHeroNoCard {
    id
    internal {
      type
    }
    title
    subtitle
    blackText
    image {
      ...ImageFragment
    }
  }
`;
