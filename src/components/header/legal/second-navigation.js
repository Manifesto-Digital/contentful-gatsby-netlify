import React from 'react';
import PropTypes from 'prop-types';
import { getActivePages } from './helpers';
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

  // Get the active page slugs (current and any parent pages)
  const activePages = getActivePages(menuItems, location);

  const isActive = slug => activePages.includes(slug);

  // Check if any items should have an active state
  const activeMenuItem = menuItems.find(menuItem =>
    activePages.includes(menuItem.navigationLink[0].slug)
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
            activePages={activePages}
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
