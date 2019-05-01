const getContentPages = async graphql =>
  graphql(`
    {
      allContentfulPageContent {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);

module.exports = { getContentPages };
