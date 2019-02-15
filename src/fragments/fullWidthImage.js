import { graphql } from 'gatsby';

export const FullWidthImageFragment = graphql`
  fragment FullWidthImageFragment on ContentfulTopicFullWidthImage {
    removeMarginBottom
    image {
      ...ImageFragment
    }
  }
`;
