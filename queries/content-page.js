const getContentPages = async graphql => {
  console.log('\x1b[31m', 'firing', '\x1b[0m')

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
  `)
}

module.exports = { getContentPages }
