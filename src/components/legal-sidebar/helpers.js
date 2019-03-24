export const buildCurrentPageHierarchy = (hierarchy, parentSlug) => {
  const hierarchyDepth = 2;

  // Get the parent of the topmost level to show for use in the heading.
  const headingRef =
    hierarchyDepth > parentSlug.length
      ? parentSlug[parentSlug.length - hierarchyDepth - 1]
      : parentSlug[0];
  const heading = headingRef.label;

  // The top most level is Legal which we do not want to show so remove from parentSlug
  const legalChildrenSlugs = parentSlug.slice(1);

  // Slice the pages parent slug if the current page greater than hierarchy depth
  const topLevelToShowIndex = legalChildrenSlugs.length - hierarchyDepth;
  const parentHierarchyToShow =
    legalChildrenSlugs.length > hierarchyDepth
      ? legalChildrenSlugs.slice(topLevelToShowIndex)
      : legalChildrenSlugs;

  // Check if page exists on current hierarchy level
  function existsOnLevel(pageRef) {
    return parentHierarchyToShow.find(ref => ref.slug === pageRef.slug);
  }

  // Copy to avoid mutating original hierarchy
  const hierarchyCopy = JSON.parse(JSON.stringify(hierarchy));

  // Loop through assign an active state to the current page parents
  function buildActiveHierarchy(hierarchyLevel) {
    const newHierarchy = [];
    function recursiveLoop(level) {
      level.forEach((pageRef, i) => {
        if (existsOnLevel(pageRef)) {
          // Set current item to active
          level[i].active = true;
          // Push the first time this matches, this will also include the children
          if (newHierarchy.length === 0) newHierarchy.push(level);
        }
        if (pageRef.children) {
          recursiveLoop(pageRef.children);
        }
      });
    }
    recursiveLoop(hierarchyLevel);

    return newHierarchy;
  }

  const currentPageHierarchy = buildActiveHierarchy(hierarchyCopy);
  return { currentPageHierarchy: currentPageHierarchy[0], heading };
};
