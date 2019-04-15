import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import PaddedBox from '../padded-box';
import { UnorderedList, MenuLink, ListItem } from './styles';

const LegalSideBar = ({ hierarchy, slug, heading }) => {
  if (!hierarchy) return null;

  const hasChildrenAndActive = menuItem =>
    menuItem.children &&
    (menuItem.slug === slug ||
      ((Object.hasOwnProperty.call(menuItem, 'active') ||
        menuItem.slug === slug) &&
        menuItem.active));

  const Menu = ({ menuItems, menuDepth = 0 }) => (
    <UnorderedList menuDepth={menuDepth}>
      {menuItems.map((menuItem, i) => (
        <Fragment key={i}>
          <ListItem key={i}>
            <MenuLink
              activePage={menuItem.slug === slug}
              activeParent={menuItem.active}
              internalLink={{ slug: menuItem.slug }}
            >
              {menuItem.label}
            </MenuLink>
          </ListItem>
          {hasChildrenAndActive(menuItem) && (
            <Menu menuItems={menuItem.children} menuDepth={menuDepth + 1} />
          )}
        </Fragment>
      ))}
    </UnorderedList>
  );

  Menu.propTypes = {
    menuItems: PropTypes.array,
    menuDepth: PropTypes.number,
  };

  if (!hierarchy) return null;
  return (
    <PaddedBox as="nav">
      <h3>{heading}</h3>
      <Menu menuItems={hierarchy} />
    </PaddedBox>
  );
};

LegalSideBar.propTypes = {
  hierarchy: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      children: PropTypes.arrayOf(PropTypes.object),
    })
  ),
  slug: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
};

export default LegalSideBar;
