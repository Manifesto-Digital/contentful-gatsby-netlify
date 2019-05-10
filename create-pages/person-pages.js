const path = require('path');
const { getPersonPages } = require('../queries/person-page');

async function createPersonPages(graphql, gatsbyCreatePage) {
  const personPageTemplate = path.resolve('src/templates/person-page.js');

  // Create pages
  const pages = await getPersonPages(graphql);

  if (pages.errors) {
    console.error(pages.errors);
    throw Error(pages.errors);
  }

  // Create pages
  pages.data.allContentfulPagePerson.edges.forEach(({ node }) => {
    if (!node.slug) return;
    const { menuParent, slug } = node;

    gatsbyCreatePage({
      path: node.slug,
      component: personPageTemplate,
      context: {
        slug,
        menuParent,
        category: node.person.category,
        personId: node.person.id,
      },
    });
  });
}

module.exports = createPersonPages;
