import { graphql } from 'gatsby';

export const ServicesFinderFragment = graphql`
  fragment ServicesFinderFragment on ContentfulComponentServicesFinder {
    id
    internal {
      type
    }
    name
    titleText
  }
`;
