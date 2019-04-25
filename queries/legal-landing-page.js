const getLegalLandingPages = async graphql =>
  graphql(`
    {
      allContentfulPageLegalLanding {
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
