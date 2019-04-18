import { graphql } from 'gatsby';

export const ContentGrid4Fragment = graphql`
  fragment ContentGrid4Fragment on ContentfulComponentContentGrid4 {
    id
    internal {
      type
    }
    border
    grid1 {
      childContentfulRichText {
        html
      }
    }
    grid2 {
      childContentfulRichText {
        html
      }
    }
    grid3 {
      childContentfulRichText {
        html
      }
    }
    grid4 {
      childContentfulRichText {
        html
      }
    }
  }
`;
