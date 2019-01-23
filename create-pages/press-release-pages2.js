const path = require('path');
const { getPressReleasePages } = require('../queries/press-release-page');

async function createPressReleasePages(graphql, gatsbyCreatePage) {
  const pressReleasePageTemplate = path.resolve(
    'src/templates/press-release.js'
  );

  /**
   * Creates pages from the contentful query.
   *
   * @param CreatePage
   *   The gatsby create pages function
   */

  function shelterCreatePage(nodeData) {
    gatsbyCreatePage({
      path: nodeData.slug,
      component: pressReleasePageTemplate,
      context: {
        slug: nodeData.slug,
      },
    });
  }

  // Create pages
  const pressReleasePages = await getPressReleasePages(graphql);

  if (pressReleasePages.errors) {
    throw Error(pressReleasePages.errors);
  }

  // Create pages

  pressReleasePages.data.allContentfulPageAssemblyPressReleasePage.edges.forEach(
    edge => {
      shelterCreatePage(edge.node);
    }
  );
}
module.exports = createPressReleasePages;
