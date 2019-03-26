const path = require('path');
const { getLegalPages } = require('../queries/legal-page');
const { getLegalLandingPages } = require('../queries/legal-landing-page');

async function createLegalPages(graphql, gatsbyCreatePage) {
  const legalPageTemplate = path.resolve('src/templates/legal-page.js');
  const legalLandingPageTemplate = path.resolve(
    'src/templates/legal-landing-page.js'
  );
  // Get legal pages
  const legalPagesResponse = await getLegalPages(graphql);
  if (legalPagesResponse.errors) {
    console.error(legalPagesResponse.errors);
    throw Error(legalPagesResponse.errors);
  }

  // Get landing pages
  const legalLandingPagesResponse = await getLegalLandingPages(graphql);
  if (legalLandingPagesResponse.errors) {
    console.error(legalLandingPagesResponse.errors);
    throw Error(legalLandingPagesResponse.errors);
  }

  const LandingPages =
    legalLandingPagesResponse.data.allContentfulPageAssemblyLegalLandingPage
      .edges;

  const legalPages =
    legalPagesResponse.data.allContentfulPageAssemblyLegalPage.edges;

  // Checks if page is already stored on the current hierarchy level
  const isStoredOnLevel = (pageRef, storedHierarchyLevel) =>
    storedHierarchyLevel.some(storedPage => storedPage.slug === pageRef.slug);

  const objectToStore = (slug, ref) => ({
    slug,
    label: ref.label,
    children: null,
    description: ref.description,
  });

  const flattenParentSlugs = parentSlug =>
    parentSlug.map(item => ({
      label: item.label,
      slug: item.menuItem.fields.slug.en_GB,
      description:
        item.menuItem.fields.pageInformation.en_GB.fields.shortDescription
          .en_GB,
    }));

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

    // Keep track of the current level of the hierarchy object during the page hierarchy loop
    // we know that they correspond to depth, with the first item in the parentSlug array will be the top level
    let hierarchyLevel = hierarchy;

    allCurrentPageHierarchy.forEach((ref, i) => {
      debugger;
      // const currentFullSlug = getFullSlug(
      //   allCurrentPageHierarchy.slice(0, i),
      //   ref.slug
      // );
      // If fist then just store on object if it doesn't exist
      if (i === 0) {
        if (!isStoredOnLevel(ref, hierarchy)) {
          hierarchy.push(objectToStore(ref.slug, ref));
        }
        return;
      }

      // We know this isn't the first in array
      const parentRef = allCurrentPageHierarchy[i - 1];
      const parentRefSlug = parentRef.slug;
      // Find the current page direct parent
      const parentInHierarchy = hierarchyLevel.find(
        parentLevelPage => parentLevelPage.slug === parentRefSlug
      );

      // Parent in hierarchy should always exist at this point
      // Store the current page in the children property of the parent
      if (parentInHierarchy.children) {
        if (!isStoredOnLevel(ref, parentInHierarchy.children)) {
          parentInHierarchy.children.push(objectToStore(ref.slug, ref));
        }
      } else {
        parentInHierarchy.children = [objectToStore(ref.slug, ref)];
      }

      // Update the level so the next iteration will be a level deeper
      hierarchyLevel = parentInHierarchy.children;
    });

    return hierarchy;
  };

  // Build up the hierarchy from the legal pages, as if a
  // landing page has no children we do not want it to
  const buildHierarchy = () => {
    if (!legalPages) return;

    const hierarchy = legalPages.reduce((accumulator, pageRef) => {
      const page = pageRef.node;

      if (!page.parentSlug) return accumulator;
      // Current page info as this won't be referenced in the parent slugs
      // and will need to also store in the hierarchy object

      debugger;
      // Get slugs from parent references
      const parentSlugsMapped = flattenParentSlugs(page.parentSlug);

      const pageInfo = {
        slug: page.slug,
        label: page.title,
        description: page.pageInformation.shortDescription.shortDescription,
      };
      return storeHierarchyPages(parentSlugsMapped, accumulator, pageInfo);
    }, []);
    return hierarchy;
  };

  const legalHierarchy = buildHierarchy(legalPages);

  // Create pages
  legalPages.forEach(({ node }) => {
    if (!node.slug) return;
    const { parentSlug, slug } = node;
    // const fullSlug = getFullSlug(parentSlug, slug);
    debugger;
    const parentSlugsFlattened = flattenParentSlugs(parentSlug);

    gatsbyCreatePage({
      path: slug,
      component: legalPageTemplate,
      context: {
        slug,
        parentSlug: parentSlugsFlattened,
        legalHierarchy,
      },
    });
  });

  // Create Landing pages
  LandingPages.forEach(({ node }) => {
    if (!node.slug) return;
    const { slug } = node;

    gatsbyCreatePage({
      path: slug,
      component: legalLandingPageTemplate,
      context: {
        slug,
        legalHierarchy,
      },
    });
  });
}

module.exports = createLegalPages;
