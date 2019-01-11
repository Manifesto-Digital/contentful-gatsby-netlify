import { graphql } from 'gatsby';

export const RelatedAdviceFragment = graphql`
  fragment RelatedAdviceFragment on ContentfulTopicRelatedAdvice {
    id
    internal {
      type
    }
    headerText
    itemsPerRow
    links {
      title
      slug
      reviewStatus
    }
  }
`;
