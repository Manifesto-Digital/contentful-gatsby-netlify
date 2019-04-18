import { graphql } from 'gatsby';

export const HeroWithCardFragment = graphql`
  fragment HeroWithCardFragment on ContentfulComponentHeroWithCard {
    id
    internal {
      type
    }
    title
    subtitle
    cardPosition
    image {
      ...ImageFragment
    }
    linkText
    link {
      ...LinkFragment
    }
  }
`;
