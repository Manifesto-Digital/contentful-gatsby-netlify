const getContentTopLevelPages = async graphql =>(
  graphql(`
    {
      allContentfulPageAssemblyContentPage(
        filter: { topic___sub_pages: { elemMatch: { id: { eq: null } } } }
      ) {
        edges {
          node {
            id
            slug
            title
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
  `)
)

module.exports = { getContentTopLevelPages }
