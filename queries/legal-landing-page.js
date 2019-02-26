const getLegalLandingPages = async graphql =>
  graphql(`
    {
      allContentfulPageAssemblyLegalLandingPage {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);

module.exports = { getLegalLandingPages };
