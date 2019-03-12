import { graphql } from 'gatsby';

export const ServicesFinderFragment = graphql`
  fragment ServicesFinderFragment on ContentfulTopicServicesFinder {
    id
    internal {
      type
    }
    name
    titleText
    introText {
      childContentfulRichText {
        html
      }
    }
  }
`;
