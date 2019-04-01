const getLegalPages = async graphql =>
  graphql(`
    {
      allContentfulPageAssemblyLegalPage {
        edges {
          node {
            id
            slug
            title
          }
        }
      }
    }
  `);
module.exports = { getLegalPages };
