import { graphql } from 'gatsby';

export const CardWithIconFragment = graphql`
  fragment CardWithIconFragment on ContentfulComponentCardWithIcon {
    id
    internal {
      type
    }
    name
    icon
    titleText
    subText
    ctaText
    link {
      ...LinkFragment
    }
  }
`;
