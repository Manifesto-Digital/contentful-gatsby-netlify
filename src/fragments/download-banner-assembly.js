import { graphql } from 'gatsby'

export const DownloadBannerAssemblyFragment = graphql`
  fragment DownloadBannerAssemblyFragment on ContentfulAssemblyDownloadBanner {
    id
    internal {
      type
    }
    headerText
    bannerColour
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
        file {
          url
          details {
            size
            image {
              width
              height
            }
          }
          fileName
        }
      }
    }
  }
`
