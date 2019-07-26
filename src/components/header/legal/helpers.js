/**
 *
 * Loop through the professionals navigation menu to find the current active page
 * and the parent pages so to that the correct menus and active states will be shown
 *
 * @param {Object []} childMenuItems
 * @param {Object} location
 *
 * @returns [menuParentSlug, menuParentSlug, activePageSlug] (example)
 */
export const getActivePages = (childMenuItems, location) => {
  const isActivePage = slug => {
    // Match optional trailing slash
    const string = `${slug}((/w+)+|/?)$`;
    const regex = new RegExp(string, 'g');
    return location.pathname.match(regex);
  };

  let activePagesArray = [];
  let pageFound = false;

  const checkLevel = items => {
    for (let i = 0; i < items.length; i += 1) {
      const item = items[i];
      if (!item.navigationLink) return;

      const itemSlug = item.navigationLink[0].slug;

      if (isActivePage(itemSlug)) {
        // If found push the active page slug
        activePagesArray.push(itemSlug);
        pageFound = true;
        break;
      } else if (item.childNavigationItems) {
        // Recursively go through the child navigation items storing
        // potential active parents item slugs
        activePagesArray.push(itemSlug);
        checkLevel(item.childNavigationItems);
      }
    }
    if (!pageFound) activePagesArray = [];
    return activePagesArray;
  };

  checkLevel(childMenuItems);
  return activePagesArray;
};
