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

  let pageFound = false;
  const activePagesArray = [];

  const checkPageLevel = (items, depth = 0) => {
    for (let i = 0; i < items.length; i += 1) {
      const item = items[i];

      // Can only ever be one active current page
      if (pageFound || !item.navigationLink) break;

      // Active pages array length corresponds to hierarchy depth.
      // If length is greater than depth then we have pushed items that have
      // children that does not include the active page that needs to be removed
      if (activePagesArray.length > depth) {
        activePagesArray.splice(depth);
      }

      const itemSlug = item.navigationLink[0].slug;
      if (isActivePage(itemSlug)) {
        // If found push the active page slug
        activePagesArray.push(itemSlug);
        pageFound = true;
        return activePagesArray;
      }
      if (item.childNavigationItems) {
        // Recursively go through the child navigation items
        // Storing the item incase a child item is the active page to be able
        // to detect active parents. If child is not active, item(s) will be spliced above
        activePagesArray.push(itemSlug);
        checkPageLevel(item.childNavigationItems, depth + 1);
      }
    }
    return activePagesArray;
  };

  return checkPageLevel(childMenuItems);
};
