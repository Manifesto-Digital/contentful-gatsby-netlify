const getEventsLandingPages = async graphql =>
  graphql(`
    {
      allContentfulPageAssemblyEventsLandingPage {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);

module.exports = { getEventsLandingPages };
