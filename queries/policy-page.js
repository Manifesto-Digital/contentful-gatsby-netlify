const getPolicyPages = async graphql =>
  graphql(`
    {
      allContentfulPageAssemblyPolicyPage {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);

module.exports = { getPolicyPages };
