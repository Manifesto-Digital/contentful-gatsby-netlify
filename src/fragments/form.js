import { graphql } from 'gatsby';

export const AssemblyFormFragment = graphql`
  fragment AssemblyFormFragment on ContentfulAssemblyForm {
    id
    internal {
      type
    }
    submitUrl
    sourceCode
    submitCallToAction
  }
`;
