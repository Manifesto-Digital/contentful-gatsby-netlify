const getPersonPages = async graphql =>
  graphql(`
    {
      allContentfulPagePerson {
        edges {
          node {
            id
            slug
            person {
              id
              category
            }
          }
        }
      }
    }
  `);

module.exports = { getPersonPages };
