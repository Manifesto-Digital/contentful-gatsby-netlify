const getContentTableOfContentsPages = async graphql =>
  graphql(`
    {
      allContentfulPageAssemblyTableOfContents {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);

module.exports = { getContentTableOfContentsPages };
