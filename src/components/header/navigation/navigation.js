import React from 'react';
import PropTypes from 'prop-types';

import { SubNavButton, ArrowSVG } from './styles-icons';
import { Menu, SubMenu, ItemLink, Item } from './styles';
import AngleRight from '../../../assets/svg/icons/chevron-down-light.svg';

const NavigationMenu = ({ pageData, id, menuOpen, setActiveMenu }) => {
  const { menuLabel, navigationLink, subNavigationItems } = pageData;

  return (
    <Menu>
      {navigationLink &&
        navigationLink.map((navLink, i) => (
          <Item key={i}>
            <ItemLink internalLink={navLink}>
              {menuLabel || navLink.title}
            </ItemLink>
            {subNavigationItems && (
              <SubNavButton type="button" onClick={() => setActiveMenu(id)}>
                <ArrowSVG src={AngleRight} cacheGetRequests />
              </SubNavButton>
            )}
          </Item>
        ))}
      {subNavigationItems && (
        <SubMenu active={menuOpen}>
          {subNavigationItems.map((item, i) => (
            <ItemLink key={i} internalLink={item}>
              {item.title}
            </ItemLink>
          ))}
        </SubMenu>
      )}
    </Menu>
  );
};

NavigationMenu.propTypes = {
  pageData: PropTypes.shape({
    navigationLink: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
      })
    ),
  }),
  id: PropTypes.string.isRequired,
  menuOpen: PropTypes.bool,
  setActiveMenu: PropTypes.func,
};

export default NavigationMenu;
