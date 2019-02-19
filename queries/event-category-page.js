const getEventCategoryPages = async graphql =>
  graphql(`
    {
      allContentfulPageAssemblyEventCategory {
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
