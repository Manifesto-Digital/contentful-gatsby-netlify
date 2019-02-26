import { graphql } from 'gatsby';

export const DownloadableFileFragment = graphql`
  fragment DownloadableFileFragment on ContentfulAsset {
    id
    internal {
      type
    }
    title
    file {
      url
      contentType
      fileName
      details {
        size
        image {
          width
          height
        }
      }
    }
  }
`;
