const path = require('path')
const { getContentTopLevelPages } = require('./queries/content-top-level-page')

/**
 * Creates pages from the contentful query.
 * @param gatsbyCreatePage
 *   The gatsby create pages function
 * @param pageTemplate
 *   The page template to use
 * @param nodeData
 *   The node data returned by the query
 * @param subPages
 *   An array of sub page data
 */
function shelterCreatePage(
  gatsbyCreatePage,
  pageTemplate,
  nodeData,
  subPages
) {

  gatsbyCreatePage({
    path: nodeData.slug,
    component: pageTemplate,
    context: {
      slug: nodeData.slug,
      subpages: subPages,
    },
  })

  if (nodeData.subPages) {
    nodeData.subPages.pages.forEach(subNode => {
      shelterCreatePage(gatsbyCreatePage, pageTemplate, subNode, subPages)
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const pageTemplate = path.resolve('src/templates/page.js')

  // Create pages
  const pages = await getContentTopLevelPages(graphql)

  if (pages.errors) {
    console.error(pages.errors)
    throw Error(pages.errors)
  }

  // Create pages
  pages.data.allContentfulPageAssemblyContentPage.edges.forEach(edge => {
    if (edge.node.subPages) {
      edge.node.subPages.pages.unshift({
        id: edge.node.id,
        slug: edge.node.slug,
        title: edge.node.title,
        subPages: null,
      })
    }
    shelterCreatePage(createPage, pageTemplate, edge.node, edge.node.subPages)

    // createPage({
    //   path: edge.node.slug,
    //   component: pageTemplate,
    //   context: {
    //     slug: edge.node.slug,
    //   },
    // })
  })
}
