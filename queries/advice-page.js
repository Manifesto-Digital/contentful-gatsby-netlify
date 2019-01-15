const getAdvicePages = async graphql =>
  graphql(`
    {
      allContentfulPageAssemblyAdvicePage {
        edges {
          node {
            title
            id
            slug
            subPages {
              title
              pages {
                id
                slug
                title
                subPages {
                  pages {
                    id
                    slug
                    title
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

module.exports = { getAdvicePages };
