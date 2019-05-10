const path = require('path');
const { getAdvicePages } = require('../queries/advice-page');

async function createAdvicePages(graphql, gatsbyCreatePage) {
  const advicePageTemplate = path.resolve('src/templates/advice-page.js');

  /**
   * Creates pages from the contentful query.
   *
   * @param CreatePage
   *   The gatsby create pages function
   */
  function shelterCreatePage(nodeData, subPages, menuParent) {
    gatsbyCreatePage({
      path: nodeData.slug,
      component: advicePageTemplate,
      context: {
        slug: nodeData.slug,
        subpages: subPages, // So we do not have to query for this again in the template
        menuParent,
      },
    });
    // If there are deeper levels of subpages
    if (nodeData.subPages) {
      nodeData.subPages.pages.forEach(subNode => {
        shelterCreatePage(subNode, subPages, menuParent);
      });
    }
  }

  // Create pages
  const advicePages = await getAdvicePages(graphql);

  if (advicePages.errors) {
    throw Error(advicePages.errors);
  }
  if (!advicePages.data.allContentfulPageAdvice) return;
  // Create pages
  advicePages.data.allContentfulPageAdvice.edges.forEach(({ node }) => {
    if (!node.slug) return;
    const { menuParent, slug } = node;
    if (node.subPages) {
      // Add the parent page info into the subPages array so that we can access in template
      node.subPages.pages.unshift({
        id: node.id,
        slug,
        title: node.title,
        subPages: null,
      });
    }
    shelterCreatePage(node, node.subPages, menuParent);
  });
}
module.exports = createAdvicePages;
