import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NavigationMenu from './navigation';

import { MobileMenuClose, MenuSVG } from './styles-icons';
import {
  Wrapper,
  Menus,
  MenuList,
  AdditionalMenu,
  Item,
  ItemLink,
} from './styles';
import CloseSVG from '../../../assets/svg/icons/times-light.svg';

const Navigation = ({ pageData, active, openState }) => {
  const [activeMenu, setActiveMenu] = useState('');
  const { navigationItems, additionalLink } = pageData;

  const updateActiveMenu = id => {
    if (id === activeMenu) {
      setActiveMenu(false);
    } else {
      setActiveMenu(id);
    }
  };

  return (
    <Wrapper active={active} ariaHidden={active}>
      <MobileMenuClose
        type="button"
        onClick={openState}
        active={active}
        aria-expanded={active}
      >
        <MenuSVG src={CloseSVG} />
      </MobileMenuClose>
      <Menus role="navigation" aria-label="Main menu">
        {navigationItems && (
          <MenuList role="menubar" aria-hidden="false">
            {navigationItems.map((item, i) => (
              <NavigationMenu
                key={i}
                id={item.id}
                pageData={item}
                menuOpen={activeMenu === item.id}
                setActiveMenu={updateActiveMenu}
              />
            ))}
          </MenuList>
        )}
        {additionalLink && (
          <AdditionalMenu role="navigation" aria-label="Secondary menu">
            <Item>
              <ItemLink internalLink={additionalLink[0]}>
                {additionalLink[0].menuLabel || additionalLink[0].title}
              </ItemLink>
            </Item>
            <Item>
              <ItemLink internalLink="https://scotland.shelter.org.uk/">
                Scotland
              </ItemLink>
            </Item>
          </AdditionalMenu>
        )}
      </Menus>
    </Wrapper>
  );
};

Navigation.propTypes = {
  active: PropTypes.bool.isRequired,
  openState: PropTypes.func,
  pageData: PropTypes.shape({
    navigationItems: PropTypes.array,
  }),
};

export default Navigation;
