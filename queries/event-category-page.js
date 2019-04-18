const getEventCategoryPages = async graphql =>
  graphql(`
    {
      allContentfulPageEventCategory {
        edges {
          node {
            id
            slug
            eventType
          }
        }
      }
    }
  `);

module.exports = { getEventCategoryPages };
