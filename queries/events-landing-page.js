const getEventsLandingPages = async graphql =>
  graphql(`
    {
      allContentfulPageEventsLanding {
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
