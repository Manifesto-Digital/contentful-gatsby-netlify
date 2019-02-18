const path = require('path');
const { getLegalPages } = require('../queries/legal-page');

async function createAdvicePages(graphql, gatsbyCreatePage) {
  const legalPageTemplate = path.resolve('src/templates/legal-page.js');

  // Create pages
  const legalPagesResponse = await getLegalPages(graphql);

  console.log('\x1b[31m', 'legalPages', legalPagesResponse, '\x1b[0m');
  // Lets loop through all legal pages and create an object to manage parent and child pages
  // This will allow us to pass through the siblings as context
  const legalPages =
    legalPagesResponse.data.allContentfulPageAssemblyLegalPage.edges;

  const legalHierarchy = {};

  const hasHierarchyChild = node =>
    Object.prototype.hasOwnProperty.call(node, 'child') || node.child;

  const hasParentPage = node =>
    Object.prototype.hasOwnProperty.call(node, 'parentPage') &&
    node.parentPage !== null;

  // Store the hierarchy in a one level deep object that will have the parent as key
  // and children will be an array of items
  const storeHierarchy = (parentNode, currentPage) => {
    if (Object.prototype.hasOwnProperty.call(legalHierarchy, parentNode.slug)) {
      legalHierarchy[parentNode.slug].children.push({
        slug: currentPage.slug,
        label: currentPage.title,
      });
    } else {
      // Create the object on the hierarchy object to hold the parent page information
      legalHierarchy[parentNode.slug] = {};
      legalHierarchy[parentNode.slug].children = [
        {
          slug: currentPage.slug,
          label: currentPage.title,
        },
      ];
      legalHierarchy[parentNode.slug].slug = parentNode.slug;
      legalHierarchy[parentNode.slug].label = parentNode.label;
      debugger;
    }
  };

  const checkHierarchy = (parentNode, currentPage) => {
    // Check if the hierarchy item has children, we only want to store the immediate parent
    // So keep drilling down until no child
    if (hasHierarchyChild(parentNode)) {
      checkHierarchy(parentNode.child, currentPage);
    } else {
      storeHierarchy(parentNode, currentPage);
    }
  };

  // Loop through legal pages to store the hierarchy
  legalPages.forEach(({ node }) => {
    if (!node.slug) {
      console.log('\x1b[31m', 'no slug for ', node, '\x1b[0m');
      return;
    }
    if (!hasParentPage(node)) return;

    const { slug, title } = node;
    const currentPage = { slug, title };
    checkHierarchy(node.parentPage, currentPage);
  });

  console.log('legalHierarchy', legalHierarchy);

  const getParentHierarchy = node => {
    if (hasHierarchyChild(node)) {
      return getParentHierarchy(node.child);
    }
    return node;
  };

  // Create pages
  legalPages.forEach(({ node }) => {
    if (!node.slug) return;

    const parentPage = hasParentPage(node)
      ? getParentHierarchy(node.parentPage)
      : null;

    const parentPageHierarchy = parentPage
      ? legalHierarchy[parentPage.slug]
      : null;

    gatsbyCreatePage({
      path: node.slug,
      component: legalPageTemplate,
      context: {
        slug: node.slug,
        parentPageHierarchy,
      },
    });
  });
}
module.exports = createAdvicePages;
