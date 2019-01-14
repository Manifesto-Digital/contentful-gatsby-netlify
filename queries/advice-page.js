const getAdvicePages = async graphql =>
  graphql(`
    {
      allContentfulPageAssemblyAdvicePage(
        filter: { topic___sub_pages: { elemMatch: { id: { eq: null } } } }
      ) {
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
