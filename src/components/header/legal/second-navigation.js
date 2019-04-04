import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { buildActiveItemsArray } from './helpers';
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
  if (!professionalsMenuItem || !professionalsMenuItem.childNavigationItems) {
    return null;
  }

  const menuItems = professionalsMenuItem.childNavigationItems;

  // Get the active page and potentially active parent slugs
  const activeItemsArray = buildActiveItemsArray(menuItems, location);
  const isActive = slug => activeItemsArray.includes(slug);
  const activeMenuItem = menuItems.find(menuItem =>
    activeItemsArray.includes(menuItem.navigationLink[0].slug)
  );

  return (
    <SecondHeaderWrapper>
      <Container noMobilePadding>
        <SecondHeaderBar>
          <SubsectionHeader>Professionals</SubsectionHeader>
          <LegalMenuList role="menubar" aria-hidden="false">
            {menuItems.map((navLink, i) => (
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
          <LegalSearchBar resolution="desktop" />
        </SecondHeaderBar>
        {activeMenuItem && activeMenuItem.childNavigationItems && (
          <ThirdNavigation
            activeMenuItem={activeMenuItem}
            location={location}
            activeItemsArray={activeItemsArray}
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
