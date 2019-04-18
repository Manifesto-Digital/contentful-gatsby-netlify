import { graphql } from 'gatsby';

export const AdviceSearchBoxComponentFragment = graphql`
  fragment AdviceSearchBoxComponentFragment on ContentfulComponentAdviceSearchBox {
    id
    headerText
    collectionToSearch
    internal {
      type
    }
    placeholder
  }
`;
