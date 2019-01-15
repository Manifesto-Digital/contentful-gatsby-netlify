const path = require('path');
const { getAdvicePages } = require('../queries/advice-page');

async function createAdvicePages(graphql, gatsbyCreatePage) {
  const advicePageTemplate = path.resolve('src/templates/advice-page.js');

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
  function shelterCreatePage(nodeData, subPages) {
    gatsbyCreatePage({
      path: nodeData.slug,
      component: advicePageTemplate,
      context: {
        slug: nodeData.slug,
        subpages: subPages, // So we do not have to query for this again
      },
    });

    // If there are deeper levels of subpages
    if (nodeData.subPages) {
      nodeData.subPages.pages.forEach(subNode => {
        shelterCreatePage(subNode, subPages);
      });
    }
  }

  // Create pages
  const advicePages = await getAdvicePages(graphql);

  if (advicePages.errors) {
    console.error('error', advicePages.errors);
    throw Error(advicePages.errors);
  }

  // Create pages
  advicePages.data.allContentfulPageAssemblyAdvicePage.edges.forEach(edge => {
    if (edge.node.subPages) {
      // Add the parent page info into the subPages array so that we can access in template
      edge.node.subPages.pages.unshift({
        id: edge.node.id,
        slug: edge.node.slug,
        title: edge.node.title,
        subPages: null,
      });
    }
    shelterCreatePage(edge.node, edge.node.subPages);
  });
}
module.exports = createAdvicePages;
