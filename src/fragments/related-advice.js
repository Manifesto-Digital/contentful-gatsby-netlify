import { graphql } from 'gatsby';

export const RelatedAdviceFragment = graphql`
  fragment RelatedAdviceFragment on ContentfulTopicRelatedAdvice {
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
