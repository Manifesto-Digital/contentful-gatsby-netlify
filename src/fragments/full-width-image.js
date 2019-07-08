import { graphql } from 'gatsby';

// header is also used in contentCardBannerFragment and causes a conflict due to different types.
// "Fields "header" conflict because they return conflicting types contentfulAssemblyContentCardsBannerHeaderRichTextNode
// and String.Use different aliases on the fields to fetch both if this was intentional."
export const FullWidthImageFragment = graphql`
  fragment FullWidthImageFragment on ContentfulComponentFullWidthImage {
    id
    internal {
      type
    }
    removeMarginBottom
    imageHeader: header
    image {
      ...ImageFragment
    }
  }
`;
