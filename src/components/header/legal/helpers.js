export const buildActiveItemsArray = (childMenuItems, location) => {
  const checkParentSlugs = item => {
    if (!item.navigationLink) return false;
    const itemSlug = item.navigationLink[0].slug;

    const possibleParentSlugs = location.pathname.split('/').slice(0, -1);
    console.log('possibleParentSlugs', possibleParentSlugs);
    const parentIsActive = possibleParentSlugs.includes(itemSlug);
    console.log('parentIsActive', parentIsActive);
    return parentIsActive;
  };

  const activeParentsAray = childMenuItems.reduce((acc, navItem) => {
    if (!navItem || !navItem.navigationLink) return false;

    console.log('navItem', navItem);
    if (checkParentSlugs(navItem)) {
      acc.push(navItem.navigationLink[0].slug);
      return acc;
    }
    if (navItem.childNavigationItems) {
      const foundChildItem = navItem.childNavigationItems.find(childItem =>
        checkParentSlugs(childItem)
      );
      // If matched then also push the parent so we can apply an active class to both
      if (foundChildItem && foundChildItem.navigationLink) {
        console.log('foundChildItem', foundChildItem);

        acc.push(
          navItem.navigationLink[0].slug,
          foundChildItem.navigationLink[0].slug
        );
      }
    }
    return acc;
  }, []);

  return activeParentsAray;
};
