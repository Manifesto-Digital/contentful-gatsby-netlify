import React from 'react';
import PropTypes from 'prop-types';
import { buildActiveParentItemsArray } from './helpers';
import ThirdNavigation from './third-navigation';
import { ItemLink } from '../navigation/styles';
import {
  SecondHeaderWrapper,
  SecondHeaderBar,
  SubsectionHeader,
  LegalItem,
  LegalMenuList,
} from './styles';
import { Container } from '../../styled/containers';
import LegalSearchBar from './search-bar';

const SecondNavigation = ({ professionalsMenuItem, location }) => {
  // If there are no sub items for the professional menu item then return early
  if (!professionalsMenuItem || !professionalsMenuItem.childNavigationItems) {
    return null;
  }

  const menuItems = professionalsMenuItem.childNavigationItems;

  // Get the active page and potentially active parent slugs
  const activeParentItemsArray = buildActiveParentItemsArray(
    menuItems,
    location
  );

  const isActive = slug => activeParentItemsArray.includes(slug);

  // Check if any items in the navigation is a parent of the current page
  const activeMenuItem = menuItems.find(menuItem =>
    activeParentItemsArray.includes(menuItem.navigationLink[0].slug)
  );

  return (
    <SecondHeaderWrapper>
      <Container noMobilePadding>
        <SecondHeaderBar>
          <SubsectionHeader>Professionals</SubsectionHeader>
          <LegalMenuList role="menubar" aria-hidden="false">
            {menuItems.map(
              (navItem, i) =>
                navItem.navigationLink && (
                  <LegalItem key={i} role="menuitem">
                    <ItemLink
                      internalLink={navItem.navigationLink[0]}
                      active={isActive(navItem.navigationLink[0].slug)}
                    >
                      {navItem.menuLabel}
                    </ItemLink>
                  </LegalItem>
                )
            )}
          </LegalMenuList>
          <LegalSearchBar resolution="desktop" />
        </SecondHeaderBar>
        {activeMenuItem && activeMenuItem.childNavigationItems && (
          <ThirdNavigation
            activeMenuItem={activeMenuItem}
            location={location}
            activeParents={activeParentItemsArray}
          />
        )}
      </Container>
    </SecondHeaderWrapper>
  );
};

SecondNavigation.propTypes = {
  professionalsMenuItem: PropTypes.object,
  location: PropTypes.object,
};

export default SecondNavigation;
