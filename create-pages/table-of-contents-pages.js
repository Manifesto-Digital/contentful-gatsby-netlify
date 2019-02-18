const path = require('path');
const {
  getContentTableOfContentsPages,
} = require('../queries/table-of-contents-page');

async function createContentPages(graphql, gatsbyCreatePage) {
  const tableOfContentsPageTemplate = path.resolve(
    'src/templates/table-of-contents.js'
  );

  // Create pages
  const tableOfContentsPages = await getContentTableOfContentsPages(graphql);

  if (tableOfContentsPages.errors) {
    console.error(tableOfContentsPages.errors);
    throw Error(tableOfContentsPages.errors);
  }

  // Create pages
  tableOfContentsPages.data.allContentfulPageAssemblyTableOfContents.edges.forEach(
    ({ node }) => {
      if (!node.slug) return;

      gatsbyCreatePage({
        path: node.slug,
        component: tableOfContentsPageTemplate,
        context: {
          slug: node.slug,
        },
      });
    }
  );
}

module.exports = createContentPages;
