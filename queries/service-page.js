const getServicePages = async graphql =>
  graphql(`
    {
      allContentfulPageAssemblyServicePage {
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
