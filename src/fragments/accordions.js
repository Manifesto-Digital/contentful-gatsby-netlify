import { graphql } from 'gatsby';

export const AccordionsFragment = graphql`
  fragment AccordionsFragment on ContentfulAssemblyAccordions {
    title
    id
    internal {
      type
    }
    accordions {
      ... on ContentfulTopicAccordion {
        title
        heading
        content {
          childContentfulRichText {
            html
          }
        }
      }
    }
  }
`;
