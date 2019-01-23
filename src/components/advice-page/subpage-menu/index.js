import React from 'react';
import PropTypes from 'prop-types';
// Components
import MenuList from './menu-list';
// Styles
import { MenuNav } from './styles';

const SubpageMenu = ({ subpages, activeSlug }) => {
  if (!subpages) return null;

  const { title, pages } = subpages;

  return (
    <aside>
      <MenuNav>
        {title && <h4>{title}</h4>}
        <MenuList items={pages} activeSlug={activeSlug} />
      </MenuNav>
    </aside>
  );
};

SubpageMenu.propTypes = {
  subpages: PropTypes.object,
  activeSlug: PropTypes.string,
};

export default SubpageMenu;
