const getLegalPages = async graphql =>
  graphql(`
    {
      allContentfulPageAssemblyLegalPage {
        edges {
          node {
            id
            slug
            title
            parentSlug {
              slug
              key
              label
            }
          }
        }
      }
    }
  `);
module.exports = { getLegalPages };
