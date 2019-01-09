const getContentPages = async graphql => {
  return graphql(`
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
};

module.exports = { getContentPages };
