const getContentPages = async graphql =>
  graphql(`
    {
      allContentfulPageAssemblyContentPage {
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
