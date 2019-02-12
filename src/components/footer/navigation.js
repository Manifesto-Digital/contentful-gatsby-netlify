import React from 'react';
import PropTypes from 'prop-types';

import { MenuList, ItemLink, Item } from './styles';

const NavigationMenu = ({ pageData }) => {
  const { menuLabel, navigationLink, subNavigationItems } = pageData;

  return (
    <Item topLevel>
      <MenuList>
        {navigationLink &&
          navigationLink.map((navLink, i) => (
            <Item key={i} role="menuitem" aria-haspopup={!!subNavigationItems}>
              <ItemLink internalLink={navLink}>
                {menuLabel || navLink.title}
              </ItemLink>
            </Item>
          ))}
        {subNavigationItems &&
          subNavigationItems.map((item, i) => (
            <Item key={i}>
              <ItemLink internalLink={item} tabindex="-1">
                {item.title}
              </ItemLink>
            </Item>
          ))}
      </MenuList>
    </Item>
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
};

export default NavigationMenu;
