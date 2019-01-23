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
  function shelterCreatePage(nodeData) {
    gatsbyCreatePage({
      path: nodeData.slug,
      component: advicePageTemplate,
      context: {
        slug: nodeData.slug,
        subpages: subPages, // So we do not have to query for this again in the template
      },
    });
  }

  // Create pages
  const advicePages = await getAdvicePages(graphql);

  if (advicePages.errors) {
    throw Error(advicePages.errors);
  }

  // Create pages
  advicePages.data.allContentfulPageAssemblyAdvicePage.edges.forEach(edge => {
    shelterCreatePage(edge.node);
  });
}
module.exports = createAdvicePages;
