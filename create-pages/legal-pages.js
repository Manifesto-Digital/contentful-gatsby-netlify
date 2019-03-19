const path = require('path');
const { getLegalPages } = require('../queries/legal-page');

async function createAdvicePages(graphql, gatsbyCreatePage) {
  const legalPageTemplate = path.resolve('src/templates/legal-page.js');

  // Create pages
  const legalPagesResponse = await getLegalPages(graphql);

  // Lets loop through all legal pages and create an object to manage parent and child pages
  // This will allow us to pass through the siblings as context
  const legalPages =
    legalPagesResponse.data.allContentfulPageAssemblyLegalPage.edges;

  // // Empty array that will store all the legal hierarchy information
  const legalHierarchy = [];

  const isStored = (pageRef, legalHierarchyLevel) => {
    return legalHierarchyLevel.some(
      storedPage => storedPage.slug === pageRef.slug
    );
  };

  const objectToStore = ref => ({
    slug: ref.slug,
    label: ref.slug,
    children: null,
  });

  const storeParentPages = parentSlug => {
    let parentRef = null;
    let hierarchyLevel = legalHierarchy;

    parentSlug.forEach((ref, i) => {
      // Check if top level exists, if so then we will need to
      // update a level of the legal hierarchy so we will store a reference
      if (i === 0) {
        if (isStored(ref, legalHierarchy)) {
          parentRef = ref;
        } else {
          // return storeRefArray(parentSlug, legalHierarchy);
          legalHierarchy.push(objectToStore(ref));
        }
        return;
      }

      if (parentRef) {
        const parentInHierarchy = hierarchyLevel.find(
          item => item.slug === parentRef.slug
        );
        // Parent in hierarchy should always exist at this point
        if (parentInHierarchy.children) {
          if (!isStored(ref, parentInHierarchy.children)) {
            parentInHierarchy.children.push(objectToStore(ref));
          }
        } else {
          parentInHierarchy.children = [objectToStore(ref)];
        }
        // debugger;
        hierarchyLevel = parentInHierarchy.children;
        parentRef = ref;
      }
      // debugger;
    });
  };

  const buildHierarchy = legalPages => {
    if (!legalPages) return;
    legalPages.forEach(ref => {
      const page = ref.node;
      if (!page.parentSlug) return;
      storeParentPages(page.parentSlug);
    });
  };

  buildHierarchy(legalPages);

  // Create pages
  legalPages.forEach(({ node }) => {
    if (!node.slug) return;

    // gatsbyCreatePage({
    //   path: page.slug,
    //   component: legalPageTemplate,
    //   context: {
    //     slug: node.slug, // TODO: need to change to use custom contenful extension full slug and store against content model
    //     page,
    //     legalHierarchy,
    //   },
    // });
  });
}

module.exports = createAdvicePages;
