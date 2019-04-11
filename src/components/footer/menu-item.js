import React from 'react';
import PropTypes from 'prop-types';

import { MenuList, ItemLink, Item } from './styles';

const MenuItem = ({ pageData }) => {
  const { menuLabel, navigationLink, childNavigationItems } = pageData;
  const navLink = navigationLink ? navigationLink[0] : null;

  if (!navLink) return null;

  return (
    <MenuList>
      <Item role="menuitem" aria-haspopup={!!childNavigationItems}>
        <ItemLink internalLink={navLink}>{menuLabel || navLink.title}</ItemLink>
      </Item>
      {childNavigationItems &&
        childNavigationItems.map(
          (item, i) =>
            item.navigationLink && (
              <Item key={i}>
                <ItemLink internalLink={item.navigationLink[0]} tabindex="-1">
                  {item.menuLabel || item.title}
                </ItemLink>
              </Item>
            )
        )}
    </MenuList>
  );
};

MenuItem.propTypes = {
  pageData: PropTypes.shape({
    navigationLink: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
      })
    ),
  }),
};

export default MenuItem;
