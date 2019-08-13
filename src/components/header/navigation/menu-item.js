import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useToggle from '../../../utils/useToggle';
import { SubNavButton, ArrowSVG } from './styles-icons';
import { SubMenuUl, ItemLink, Item, SubMenuListItem } from './styles';
import AngleRight from '../../../assets/svg/icons/chevron-down-light.svg';

const NavigationMenuItem = ({
  menuItem,
  id,
  menuOpen,
  setActiveMenu,
  legal,
  navLevel,
}) => {
  const [activeSubMenus, setOpenSubMenus] = useState([]);
  const { menuLabel, navigationLink, childNavigationItems } = menuItem;
  const navLink = navigationLink ? navigationLink[0] : null;

  if (!navLink) return null;

  const subMenuClick = subMenuItemID => {
    if (activeSubMenus.includes(subMenuItemID)) {
      // Remove from active menus
      const updatedActiveMenus = activeSubMenus.filter(
        itemID => itemID !== subMenuItemID
      );
      setOpenSubMenus(updatedActiveMenus);
    } else {
      // Add to active menus
      const updatedActiveMenus = [...activeSubMenus, subMenuItemID];
      setOpenSubMenus(updatedActiveMenus);
    }
  };
  return (
    <>
      <Item
        role="menuitem"
        aria-haspopup={!!childNavigationItems}
        topLevel={navLevel === 1}
      >
        <ItemLink internalLink={navLink}>{menuLabel || navLink.title}</ItemLink>
        {childNavigationItems && navLevel < 3 && (
          <SubNavButton
            type="button"
            onClick={() => setActiveMenu(id)}
            className="tracking-subnav-button"
            data-tracking={menuLabel || navLink.title}
            aria-expanded={menuOpen}
            legal={legal}
          >
            <ArrowSVG src={AngleRight} cacheGetRequests />
          </SubNavButton>
        )}
      </Item>
      {childNavigationItems && (
        <SubMenuListItem active={menuOpen}>
          <SubMenuUl
            active={menuOpen}
            aria-expanded={menuOpen}
            aria-hidden={!menuOpen}
            role="menu"
            legal={legal}
          >
            {childNavigationItems.map(
              (item, i) =>
                item.navigationLink &&
                (item.childNavigationItems && navLevel < 3 ? (
                  <NavigationMenuItem
                    key={i}
                    id={item.id}
                    menuItem={item}
                    menuOpen={activeSubMenus.includes(item.id)}
                    setActiveMenu={() => subMenuClick(item.id)}
                    navLevel={navLevel + 1}
                  />
                ) : (
                  <Item key={i}>
                    <ItemLink
                      internalLink={item.navigationLink[0]}
                      tabindex="-1"
                    >
                      {item.menuLabel}
                    </ItemLink>
                  </Item>
                ))
            )}
          </SubMenuUl>
        </SubMenuListItem>
      )}
    </>
  );
};

NavigationMenuItem.propTypes = {
  menuItem: PropTypes.shape({
    navigationLink: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
      })
    ),
    menuLabel: PropTypes.string.isRequired,
  }),
  id: PropTypes.string.isRequired,
  menuOpen: PropTypes.bool,
  setActiveMenu: PropTypes.func,
  legal: PropTypes.bool,
  navLevel: PropTypes.number,
};

NavigationMenuItem.defaultProps = {
  navLevel: 1,
};

export default NavigationMenuItem;
