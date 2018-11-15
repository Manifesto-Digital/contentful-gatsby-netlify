import { graphql } from 'gatsby'

export const ImageStuff = graphql`
  fragment ImageStuff on ContentfulAsset {
    title
    description
  }
`
