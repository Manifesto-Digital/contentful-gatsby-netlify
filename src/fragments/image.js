import { graphql } from 'gatsby'

export const ImageFragment = graphql`
  fragment ImageFragment on ContentfulAsset {
    id
    description
    title
    file {
      url
      fileName
      contentType
    }
  }
`
