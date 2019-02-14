export const FullWidthImageFragment = graphql`
  fragment FullWidthImageFragment on ContentfulTopicFullWidthImage {
    image {
      ...ImageFragment
    }
  }
`;
