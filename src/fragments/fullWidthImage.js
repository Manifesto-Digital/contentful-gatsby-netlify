export const FullWidthImageFragment = graphql`
  fragment FullWidthImageFragment on ContentfulTopicFullWidthImage {
    removeMarginBottom
    image {
      ...ImageFragment
    }
  }
`;
