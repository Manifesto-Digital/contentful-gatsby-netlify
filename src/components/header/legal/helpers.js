export const buildActiveParentItemsArray = (childMenuItems, location) => {
  const checkParentSlugs = item => {
    if (!item.navigationLink) return false;
    const itemSlug = item.navigationLink[0].slug;
    return location.pathname.includes(itemSlug);
  };

  // Build an array of slugs of matching parent pages, so that we can apply an active state to the parent items
  const activeParentsAray = childMenuItems.reduce((acc, navItem) => {
    if (!navItem || !navItem.navigationLink) return acc;

    if (checkParentSlugs(navItem)) {
      acc.push(navItem.navigationLink[0].slug);
    }

    if (navItem.childNavigationItems) {
      const foundChildItem = navItem.childNavigationItems.find(childItem =>
        checkParentSlugs(childItem)
      );

      // Check if the child items match
      if (foundChildItem && foundChildItem.navigationLink) {
        acc.push(foundChildItem.navigationLink[0].slug);
      }
    }
    return acc;
  }, []);

  return activeParentsAray;
};
