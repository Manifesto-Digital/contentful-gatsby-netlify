import { graphql } from 'gatsby';

export const DownloadBannerAssemblyFragment = graphql`
  fragment DownloadBannerAssemblyFragment on ContentfulAssemblyDownloadBanner {
    id
    internal {
      type
    }
    headerText
    removeMarginBottom
    downloadCta {
      name
      buttonText
      filePreview {
        description
        file {
          url
        }
      }
      download {
        ...DownloadableFileFragment
      }
    }
  }
`;
