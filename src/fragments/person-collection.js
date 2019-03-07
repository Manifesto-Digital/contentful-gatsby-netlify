import { graphql } from 'gatsby';

export const PersonCollectionFragment = graphql`
  fragment PersonCollectionFragment on ContentfulAssemblyPersonCollection {
    id
    internal {
      type
    }
    headerText
    people {
      ...PersonFragment
    }
    category
  }
`;
