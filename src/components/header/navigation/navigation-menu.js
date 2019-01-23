import React from 'react';
import PropTypes from 'prop-types';

import { SubNavButton, ArrowSVG } from './styles-icons';
import { Menu, SubMenu, ItemLink, Item } from './styles';
import AngleRight from '../../../assets/svg/icons/chevron-down-light.svg';

const NavigationMenu = ({ data, id, menuOpen, setActiveMenu }) => {
  const { menuLabel, navigationLink, subNavigationItems } = data;

  return (
    <Menu>
      {navigationLink &&
        navigationLink.map((navLink, i) => (
          <Item key={i}>
            <ItemLink to={navLink.slug}>{menuLabel || navLink.title}</ItemLink>
            {subNavigationItems && (
              <SubNavButton onClick={() => setActiveMenu(id)} type="button">
                <ArrowSVG src={AngleRight} cacheGetRequests />
              </SubNavButton>
            )}
          </Item>
        ))}
      {subNavigationItems && (
        <SubMenu active={menuOpen}>
          {subNavigationItems.map((item, i) => (
            <ItemLink key={i} to={item.slug}>
              {item.title}
            </ItemLink>
          ))}
        </SubMenu>
      )}
    </Menu>
  );
};

NavigationMenu.propTypes = {
  data: PropTypes.shape({
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
