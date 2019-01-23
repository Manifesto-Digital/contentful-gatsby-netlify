const path = require('path');
const { getPressReleasePages } = require('../queries/press-release-page');

async function createPressReleasePages(graphql, gatsbyCreatePage) {
  const pressReleasePageTemplate = path.resolve(
    'src/templates/press-release-list.js'
  );

  /**
   * Creates pages from the contentful query.
   *
   * @param CreatePage
   *   The gatsby create pages function
   */

  // Create pages
  const pressReleasePages = await getPressReleasePages(graphql);

  if (pressReleasePages.errors) {
    throw Error(pressReleasePages.errors);
  }

  // Create blog-list pages
  const posts =
    pressReleasePages.data.allContentfulPageAssemblyPressReleasePage.edges;
  const postsPerPage = 2; // deliberately low for testing purposes
  const numPages = Math.ceil(posts.length / postsPerPage);

  Array.from({ length: numPages }).forEach((edge, i) => {
    gatsbyCreatePage({
      path: i === 0 ? `/press-releases` : `/press-releases/${i + 1}`,
      component: pressReleasePageTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
      },
    });
  });
}
module.exports = createPressReleasePages;
