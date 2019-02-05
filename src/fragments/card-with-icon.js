import { graphql } from 'gatsby';

export const CardWithIconFragment = graphql`
  fragment CardWithIconFragment on ContentfulTopicCardWithIcon {
    id
    internal {
      type
    }
    name

    icon
    titleText
    subText
    ctaText
    ctaLink {
      id
      slug
    }
  }
`;
