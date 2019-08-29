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

const SecondNavigation = ({ topLevelNavigationItems, location }) => {
  // If there are no sub items for the professional menu item then return early
  if (!topLevelNavigationItems || !location) return null;

  // Get the active page slugs (current and any parent pages)
  const activePages = getActivePages(topLevelNavigationItems, location);

  // Check if any items should have an active state
  const activeParentItem = topLevelNavigationItems.find(menuItem =>
    activePages.includes(menuItem.navigationLink[0].slug)
  );

  const isActive = slug => activePages.includes(slug);

  if (!activeParentItem || !activeParentItem.childNavigationItems) return null;
  const activeMenu = activeParentItem.childNavigationItems;

  return (
    <SecondHeaderWrapper>
      <Container noMobilePadding>
        <SecondHeaderBar>
          <SubsectionHeader>{activeParentItem.menuLabel}</SubsectionHeader>
          <LegalMenuList role="menubar" aria-hidden="false">
            {activeMenu.map(
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
        {activeMenu && (
          <ThirdNavigation
            parentMenu={activeMenu}
            location={location}
            activePages={activePages}
          />
        )}
      </Container>
    </SecondHeaderWrapper>
  );
};

SecondNavigation.propTypes = {
  topLevelNavigationItems: PropTypes.array,
  location: PropTypes.object,
};

export default SecondNavigation;
