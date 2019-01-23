import { graphql } from 'gatsby';

export const AdviceSearchBoxTopicFragment = graphql`
  fragment AdviceSearchBoxTopicFragment on ContentfulTopicAdviceSearchBox {
    id
    headerText
    collectionToSearch
    internal {
      type
    }
    placeholder
  }
`;
