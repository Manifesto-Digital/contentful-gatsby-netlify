import React from 'react';
import PropTypes from 'prop-types';
import { ItemLink } from '../navigation/styles';
import {
  LegalItem,
  ThirdNavigationBar,
  LegalMenuList,
  MoreSubMenu,
} from './styles';
import useToggle from '../../../utils/useToggle';
import { SubNavButton, ArrowSVG } from '../navigation/styles-icons';
import AngleRight from '../../../assets/svg/icons/chevron-down-light.svg';

const ThirdNavigation = ({ parentMenu, activePages }) => {
  const [moreMenuOpen, setMoreMenuState] = useToggle(false);

  // Check if any items should have an active state
  const activeParentItem = parentMenu.find(menuItem =>
    activePages.includes(menuItem.navigationLink[0].slug)
  );

  if (!activeParentItem || !activeParentItem.childNavigationItems) {
    return null;
  }

  const childMenuItems = activeParentItem.childNavigationItems.filter(
    item => item.navigationLink
  );

  // If there are more than the specified amount, store im a more items drop down
  const amountToShow = 4;
  const itemsToShow = childMenuItems.slice(0, amountToShow);
  const moreItems =
    childMenuItems.length > amountToShow
      ? childMenuItems.slice(amountToShow)
      : null;

  const isActive = slug => activePages.includes(slug);
  // Check which which menu items to display based on which parent is active
  const activeSubMenu = childMenuItems.filter(
    menuItem => menuItem.navigationLink
  );

  if (!activeSubMenu) return null;

  return (
    <ThirdNavigationBar>
      <LegalMenuList role="menubar" aria-hidden="false">
        {itemsToShow.map((navItem, i) => (
          <LegalItem key={i} role="menuitem">
            <ItemLink
              internalLink={navItem.navigationLink[0]}
              active={isActive(navItem.navigationLink[0].slug)}
            >
              {navItem.menuLabel}
            </ItemLink>
          </LegalItem>
        ))}
      </LegalMenuList>

      {moreItems && (
        <LegalItem role="menuitem">
          More
          <SubNavButton
            type="button"
            onClick={() => setMoreMenuState()}
            aria-expanded={moreMenuOpen}
          >
            <ArrowSVG src={AngleRight} cacheGetRequests />
          </SubNavButton>
          {moreMenuOpen && (
            <MoreSubMenu
              active={moreMenuOpen}
              aria-expanded={moreMenuOpen}
              aria-hidden={!moreMenuOpen}
              role="menu"
            >
              {moreItems &&
                moreItems.map((navItem, i) => (
                  <LegalItem key={i}>
                    <ItemLink
                      internalLink={navItem.navigationLink[0]}
                      tabindex="-1"
                      active={isActive(navItem.navigationLink[0].slug)}
                    >
                      {navItem.menuLabel}
                    </ItemLink>
                  </LegalItem>
                ))}
            </MoreSubMenu>
          )}
        </LegalItem>
      )}
    </ThirdNavigationBar>
  );
};

ThirdNavigation.propTypes = {
  parentMenu: PropTypes.object,
  activePages: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ThirdNavigation;
