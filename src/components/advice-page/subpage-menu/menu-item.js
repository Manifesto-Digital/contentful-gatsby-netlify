import React from 'react';
import PropTypes from 'prop-types';
// Components
import MenuList from './menu-list';
import LinkHandler from '../../link-handler';

const MenuItem = ({ item, activeSlug }) => {
  const itemSlug = item.slug;
  const { title, subPages } = item;

  const Item = () => {
    if (activeSlug === itemSlug) {
      return <>{title}</>;
    }
    return <LinkHandler internalLink={item}>{title}</LinkHandler>;
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
