import React from 'react';
import PropTypes from 'prop-types';
// Components
import MenuList from './menu-list';

const MenuItem = ({ item, activeSlug }) => {
  const itemSlug = item.slug;
  const { title, subPages } = item;

  const Item = () => {
    if (activeSlug === itemSlug) {
      return <>{title}</>;
    }
    return <a href={itemSlug}>{title}</a>;
  };

  if (subPages) {
    return (
      <li>
        <Item />
        <MenuList items={subPages.pages} />
      </li>
    );
  }

  return (
    <li>
      <Item />
    </li>
  );
};

MenuItem.propTypes = {
  item: PropTypes.object,
  activeSlug: PropTypes.string,
};

export default MenuItem;
