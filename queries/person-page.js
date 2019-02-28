const getPersonPages = async graphql =>
  graphql(`
    {
      allContentfulPageAssemblyPerson {
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
