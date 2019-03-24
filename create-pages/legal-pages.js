const path = require('path');
const { getLegalPages } = require('../queries/legal-page');
const { getFullSlug } = require('./helpers');

async function createAdvicePages(graphql, gatsbyCreatePage) {
  const legalPageTemplate = path.resolve('src/templates/legal-page.js');

  // Create pages
  const legalPagesResponse = await getLegalPages(graphql);

  const legalPages =
    legalPagesResponse.data.allContentfulPageAssemblyLegalPage.edges;

  // Checks if page is already stored on the current hierarchy level
  const isStoredOnLevel = (pageRef, storedHierarchyLevel) =>
    storedHierarchyLevel.some(storedPage => storedPage.slug === pageRef.slug);

  const objectToStore = (currentFullSlug, ref) => ({
    slug: ref.slug,
    label: ref.label,
    children: null,
    fullSlug: currentFullSlug,
  });

  /**
   * This loops through a pages parents and builds a store for the legal hierarchy
   *
   * Typical structure of a page in hierarchy
   * {slug: String, label: String, children: Page[]}
   *
   * @param {Object[]} parentSlug
   * @param {Object[]} hierarchy
   * @param {Object} pageInfo
   *
   * @returns {Page[]}
   */
  const storeHierarchyPages = (parentSlug, hierarchy, pageInfo) => {
    if (!parentSlug || !Array.isArray(parentSlug)) return;

    // Add current page to parent slugs so that we have the full page depth
    const allCurrentPageHierarchy = [...parentSlug, pageInfo];
    // Keep track of the current level of the hierarchy object during the current page hierarchy loop
    // we know that they correspond to depth, with the first item in the parentSlug array will be the top level
    let hierarchyLevel = hierarchy;

    allCurrentPageHierarchy.forEach((ref, i) => {
      const currentFullSlug = getFullSlug(
        allCurrentPageHierarchy.slice(0, i),
        ref.slug
      );

      // If fist then just store on object if it doesn't exist
      if (i === 0) {
        if (!isStoredOnLevel(ref, hierarchy)) {
          hierarchy.push(objectToStore(currentFullSlug, ref));
        }
        return;
      }

      // We know this isn't the first in array
      const parentRef = allCurrentPageHierarchy[i - 1];

      // Find the current page direct parent
      const parentInHierarchy = hierarchyLevel.find(
        parentPage => parentPage.slug === parentRef.slug
      );

      // Parent in hierarchy should always exist at this point
      // Store the current page in the children property of the parent
      if (parentInHierarchy.children) {
        if (!isStoredOnLevel(ref, parentInHierarchy.children)) {
          parentInHierarchy.children.push(objectToStore(currentFullSlug, ref));
        }
      } else {
        parentInHierarchy.children = [objectToStore(currentFullSlug, ref)];
      }

      // Update the level so the next iteration will be a level deeper
      hierarchyLevel = parentInHierarchy.children;
    });

    return hierarchy;
  };

  const buildHierarchy = () => {
    if (!legalPages) return;

    const hierarchy = legalPages.reduce((accumulator, pageRef) => {
      const page = pageRef.node;
      if (!page.parentSlug) return accumulator;
      // Current page info as this won't be referenced in the parent slugs
      // and will need to also store in the hierarchy object
      const pageInfo = { slug: page.slug, label: page.title };
      return storeHierarchyPages(page.parentSlug, accumulator, pageInfo);
    }, []);
    return hierarchy;
  };

  const legalHierarchy = buildHierarchy(legalPages);

  // Create pages
  legalPages.forEach(({ node }) => {
    if (!node.slug) return;
    const { parentSlug, slug } = node;
    const fullSlug = getFullSlug(parentSlug, slug);

    gatsbyCreatePage({
      path: fullSlug,
      component: legalPageTemplate,
      context: {
        slug,
        parentSlug,
        legalHierarchy,
      },
    });
  });
}

module.exports = createAdvicePages;
