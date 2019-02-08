import { graphql } from 'gatsby';

export const CtaAssemblyFragment = graphql`
  fragment CtaAssemblyFragment on ContentfulAssemblyCta {
    id
    internal {
      type
    }
    removeMarginBottom
    bannerColour
    ctaHeaderText
    cta {
      ... on Node {
        ...ctaStandardFragment
        ...ctaWithIconFragment
      }
    }
  }
`;
