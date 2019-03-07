import { graphql } from 'gatsby';

export const HeroWithCardFragment = graphql`
  fragment HeroWithCardFragment on ContentfulTopicHeroWithCard {
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
    internalLink {
      id
      slug
    }
    externalLink {
      id
      internal {
        type
      }
      URL
      newTab
    }
  }
`;
