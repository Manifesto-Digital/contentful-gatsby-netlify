const getPolicyPages = async graphql =>
  graphql(`
    {
      allContentfulPagePolicy {
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
