import { graphql } from 'gatsby';

export const VideoComponentFragment = graphql`
  fragment VideoComponentFragment on ContentfulComponentVideoEmbed {
    id
    name
    externalUrl
    title
    metaDescription
    bottomText {
      json
    }
    removeMarginBottom
    internal {
      type
    }
  }
`;
