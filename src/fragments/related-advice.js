import { graphql } from 'gatsby';

export const RelatedAdviceFragment = graphql`
  fragment RelatedAdviceFragment on ContentfulComponentRelatedAdvice {
    id
    internal {
      type
    }
    headerText
    columns
    links {
      title
      slug
    }
  }
`;
