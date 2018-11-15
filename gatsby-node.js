const path = require('path')
const { getContentPages } = require('./queries/content-page')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const pageTemplate = path.resolve('src/templates/page.js')

  // Create pages
  const pages = await getContentPages(graphql)

  if (pages.errors) {
    console.error(pages.errors)
    throw Error(pages.errors)
  }

  // Create pages
  pages.data.allContentfulPageAssemblyContentPage.edges.forEach(edge => {
    createPage({
      path: edge.node.slug,
      component: pageTemplate,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
