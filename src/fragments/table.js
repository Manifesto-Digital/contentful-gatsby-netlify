import { graphql } from 'gatsby';

export const TableFragment = graphql`
  fragment TableFragment on ContentfulComponentTable {
    id
    internal {
      type
    }
    tableHeader
    table {
      tableData
    }
  }
`;
