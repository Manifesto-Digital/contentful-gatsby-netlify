const getStandardEventPages = async graphql =>
  graphql(`
    {
      allContentfulPageAssemblyStandardEvent {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);

module.exports = { getStandardEventPages };
