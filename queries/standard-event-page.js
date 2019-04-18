const getStandardEventPages = async graphql =>
  graphql(`
    {
      allContentfulPageStandardEvent {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);

module.exports = { getStandardEventPages };
