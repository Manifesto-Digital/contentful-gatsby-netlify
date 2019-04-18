import { graphql } from 'gatsby';

export const HeroNoCardFragment = graphql`
  fragment HeroNoCardFragment on ContentfulComponentHeroNoCard {
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
