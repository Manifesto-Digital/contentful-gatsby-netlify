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
    console.log('\x1b[31m', 'creating', nodeData, '\x1b[0m');

    gatsbyCreatePage({
      path: nodeData.slug,
      component: advicePageTemplate,
      context: {
        slug: nodeData.slug,
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
