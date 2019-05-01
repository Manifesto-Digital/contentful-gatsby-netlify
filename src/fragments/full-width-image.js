import { graphql } from 'gatsby';

export const FullWidthImageFragment = graphql`
  fragment FullWidthImageFragment on ContentfulComponentFullWidthImage {
    removeMarginBottom
    header
    image {
      ...ImageFragment
    }
  }
`;
