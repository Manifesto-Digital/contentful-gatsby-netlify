const getLegalPages = async graphql =>
  graphql(`
    {
      allContentfulPageAssemblyLegalPage {
        edges {
          node {
            id
            slug
            title
            parentPage {
              slug
              key
              child {
                slug
                label
                key
              }
            }
          }
        }
      }
    }
  `);
module.exports = { getLegalPages };
