const getServicePages = async graphql =>
  graphql(`
    {
      allContentfulPageService {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);

module.exports = { getServicePages };
