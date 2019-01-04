import { graphql } from 'gatsby'

export const navigationLinkBoxFragment = graphql`
  fragment navigationLinkBoxFragment on ContentfulTopicNavigationLinkBox {
    id
    internal {
      type
    }
    headerText
    links {
      title
      slug
    }
  }
`
