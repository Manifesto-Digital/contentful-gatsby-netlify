import React from 'react';
import PropTypes from 'prop-types';
// Components
import MenuItem from './menu-item';

const MenuList = ({ items, activeSlug }) => (
  <ol>
    {items.map((item, i) => (
      <MenuItem activeSlug={activeSlug} item={item} key={i} />
    ))}
  </ol>
);

MenuList.propTypes = {
  items: PropTypes.array,
  activeSlug: PropTypes.string,
};

export default MenuList;
