import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NavigationMenuItem from '../navigation/menu-item';
import { Overlay } from '../../styled/overlay';
import { VisuallyHidden } from '../../styled/accessibility';
import { MobileMenuClose, MenuSVG } from '../navigation/styles-icons';
import {
  Wrapper,
  Menus,
  MenuList,
  Item,
  ItemLink,
  SkipToContent,
} from '../navigation/styles';
import { LegalDonateButton } from './styles';
import CloseSVG from '../../../assets/svg/icons/times-light.svg';
import LegalSearchBar from './search-bar';

const Navigation = ({
  navigationItems,
  active,
  searchFocus,
  openState,
  searchState,
}) => {
  const [activeMenu, setActiveMenu] = useState('');

  const updateActiveMenu = id => {
    if (id === activeMenu) {
      setActiveMenu(false);
    } else {
      setActiveMenu(id);
    }
  };

  return (
    <>
      <Wrapper active={active} ariaHidden={active}>
        <MobileMenuClose
          type="button"
          onClick={() => {
            openState();
            if (searchFocus) searchState();
          }}
          active={active}
          aria-expanded={active}
        >
          <MenuSVG src={CloseSVG} />
        </MobileMenuClose>
        <LegalSearchBar searchFocus={searchFocus} resolution="mobile" />
        <Menus role="navigation" aria-label="Main menu" legal>
          {navigationItems && (
            <MenuList role="menubar" aria-hidden="false">
              {navigationItems.map((item, i) => (
                <NavigationMenuItem
                  key={i}
                  id={item.id}
                  menuItem={item}
                  menuOpen={activeMenu === item.id}
                  setActiveMenu={() => updateActiveMenu(item.id)}
                  legal
                />
              ))}
              <Item topLevel desktopOnly>
                <LegalDonateButton
                  internalLink={{ slug: 'donate' }}
                  bg="donate"
                  noMargin
                >
                  Donate
                  <VisuallyHidden as="legend">Donate</VisuallyHidden>
                </LegalDonateButton>
              </Item>
              <Item topLevel lastItem>
                <ItemLink
                  as="a"
                  href="https://scotland.shelter.org.uk/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Scotland
                </ItemLink>
              </Item>
            </MenuList>
          )}
        </Menus>
        <SkipToContent href="#main">Skip to main content</SkipToContent>
      </Wrapper>
      <Overlay
        active={active}
        subMenuActive={!!activeMenu}
        onClick={() => updateActiveMenu()}
      />
    </>
  );
};

Navigation.propTypes = {
  active: PropTypes.bool.isRequired,
  searchFocus: PropTypes.bool,
  openState: PropTypes.func,
  searchState: PropTypes.func,
  navigationItems: PropTypes.array,
};

export default Navigation;
