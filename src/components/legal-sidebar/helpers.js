export const buildCurrentPageHierarchy = (hierarchy, slug) => {
  const hierarchyDepth = 2;
  console.log('hierarchy', hierarchy, slug);
  if (!hierarchy || !slug) {
    throw new Error('hierarchy object and page slug required');
  }

  function existsOnLevel(hierarchyLevel) {
    return hierarchyLevel.find(pageRef => pageRef.slug === slug);
  }

  // Copy to avoid mutating original hierarchy
  const hierarchyCopy = JSON.parse(JSON.stringify(hierarchy));

  // Loop through assign an active state to the current page parents
  function findPageHierarchyInformation(hierarchyLevel) {
    let foundPageDepth = null;
    let foundPage = null;
    const parents = [];
    let depth = 0;

    function recursiveLoop(level) {
      level.forEach((pageRef, i) => {
        if (foundPageDepth) return false;
        depth += 1;
        if (existsOnLevel(level)) {
          foundPageDepth = depth;
          foundPage = level[i];
          return;
        }
        if (pageRef.children) {
          parents.push(pageRef);
          recursiveLoop(pageRef.children);
        }
      });
    }
    recursiveLoop(hierarchyLevel);

    if (!foundPage) throw new Error('no page found in hierarchy');

    return { foundPageDepth, parents, foundPage };
  }

  function buildActiveLegalSidebar(
    hierarchyLevel,
    foundPageDepth,
    parents,
    foundPage
  ) {
    const visibleHierarchy = [];
    let depth = 0;
    // If the active page has children then adjust the visible depth
    const revisedHierarchyDepth = foundPage.children
      ? hierarchyDepth - 1
      : hierarchyDepth;
    const startDepth =
      foundPageDepth > revisedHierarchyDepth
        ? foundPageDepth - revisedHierarchyDepth
        : 1;

    const heading = parents[0].label;

    function recursiveLoop(level) {
      level.forEach((pageRef, i) => {
        depth += 1;
        // If the correct start depth and slug is in parents slug array
        if (parents.find(parent => parent.slug === pageRef.slug)) {
          // Set current item to active
          level[i].active = true;
          // Push the first time this matches, this will also include the children
          if (depth === startDepth) visibleHierarchy.push(level);
        }
        if (pageRef.children) {
          recursiveLoop(pageRef.children);
        }
      });
    }
    recursiveLoop(hierarchyLevel);

    return { visibleHierarchy, heading };
  }

  try {
    const { foundPageDepth, parents, foundPage } = findPageHierarchyInformation(
      hierarchyCopy
    );

    const currentLegalSidebar = buildActiveLegalSidebar(
      hierarchyCopy,
      foundPageDepth,
      parents,
      foundPage
    );
    return {
      currentPageHierarchy: currentLegalSidebar.visibleHierarchy[0],
      heading: currentLegalSidebar.heading,
      currentPage: foundPage,
    };
  } catch (e) {
    throw e;
  }
};
