import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { buildActiveItemsArray } from './helpers';
import { MenuList, ItemLink, SubMenu } from '../navigation/styles';
import {
  SecondHeaderWrapper,
  SecondHeaderBar,
  SubsectionHeader,
  LegalItem,
  ThirdNavigationBar,
  LegalMenuList,
  MoreItemMenu,
  MoreSubMenu,
} from './styles';
import { Container } from '../../styled/containers';
import useToggle from '../../../utils/useToggle';
import { SubNavButton, ArrowSVG } from '../navigation/styles-icons';
import AngleRight from '../../../assets/svg/icons/chevron-down-light.svg';
import LegalSearchBar from './search-bar';

const ThirdNavigation = ({ activeMenuItem, location, activeItemsArray }) => {
  const [moreMenuOpen, setMoreMenuState] = useToggle(false);

  console.log('activeMenuItem', activeMenuItem);

  if (!activeMenuItem || !activeMenuItem.childNavigationItems) {
    return null;
  }
  const childMenuItems = activeMenuItem.childNavigationItems;
  const itemsToShow = childMenuItems.slice(0, 4);
  const moreItems = childMenuItems.length > 4 ? childMenuItems.slice(4) : null;

  const isActive = slug => activeItemsArray.includes(slug);
  const activeSubMenu = childMenuItems
    .filter(menuItem => menuItem.navigationLink)
    .find(menuItem =>
      activeItemsArray.includes(menuItem.navigationLink[0].slug)
    );

  if (!activeSubMenu) return null;
  console.log('activeSubMenu', activeSubMenu);

  return (
    <>
      <ThirdNavigationBar>
        <LegalMenuList role="menubar" aria-hidden="false">
          {itemsToShow.map((navLink, i) => (
            <LegalItem key={i} role="menuitem">
              <ItemLink
                internalLink={navLink.navigationLink[0]}
                active={isActive(navLink.navigationLink[0].slug)}
              >
                {navLink.menuLabel}
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
                  moreItems.map((item, i) => (
                    <LegalItem key={i}>
                      <ItemLink
                        internalLink={item.navigationLink[0]}
                        tabindex="-1"
                      >
                        {item.menuLabel}
                      </ItemLink>
                    </LegalItem>
                  ))}
              </MoreSubMenu>
            )}
          </LegalItem>
        )}
      </ThirdNavigationBar>
    </>
  );
};

ThirdNavigation.propTypes = {
  activeMenuItem: PropTypes.object,
  location: PropTypes.object,
  activeItemsArray: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ThirdNavigation;
