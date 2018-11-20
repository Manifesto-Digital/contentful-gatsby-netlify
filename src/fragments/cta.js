import { graphql } from 'gatsby'

export const CTAFragment = graphql`
  fragment CTAFragment on ContentfulTopicStandardCta {
    ctaColour
    name
    internalLink {
      id
      slug

      internal {
        type
      }
    }
    externalUrl
    buttonText
    id
  }
`
