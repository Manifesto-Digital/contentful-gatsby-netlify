import { graphql } from 'gatsby'

export const CTAAssemblyFragment = graphql`
  fragment CTAAssemblyFragment on ContentfulAssemblyCta {
    id
    internal {
      type
    }
    removeMarginBottom
    bannerColour
    ctaHeaderText
    cta {
      ...CTAFragment
    }
  }
`
