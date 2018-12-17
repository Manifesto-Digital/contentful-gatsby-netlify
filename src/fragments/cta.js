import { graphql } from 'gatsby'

export const ctaStandardFragment = graphql`
  fragment ctaStandardFragment on ContentfulTopicStandardCta {
    id
    name
    ctaColour
    internal {
      type
    }
    internalLink {
      id
      slug
    }
    externalUrl
    buttonText
  }
`

export const ctaWithIconFragment = graphql`
  fragment ctaWithIconFragment on ContentfulTopicCtaWithIcon {
    id
    name
    ctaColour
    internal {
      type
    }
    internalLink {
      id
      slug
    }
    externalUrl
    buttonText
    icon {
      id
      file {
        url
        fileName
        contentType
      }
    }
  }
`
