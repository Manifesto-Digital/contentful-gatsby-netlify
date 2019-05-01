import { graphql } from 'gatsby';

export const ContentGrid4Fragment = graphql`
  fragment ContentGrid4Fragment on ContentfulComponentContentGrid4 {
    id
    internal {
      type
    }
    border
    grid1 {
      json
    }
    grid2 {
      json
    }
    grid3 {
      json
    }
    grid4 {
      json
    }
  }
`;
