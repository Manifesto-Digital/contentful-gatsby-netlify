import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import PaddedBox from '../padded-box';
import { buildCurrentPageHierarchy } from './helpers';
import { UnorderedList, MenuLink, ListItem } from './styles';

const LegalSideBar = ({ hierarchy, parentSlug, slug }) => {
  if (!hierarchy) return null;

  const { currentPageHierarchy, heading } = buildCurrentPageHierarchy(
    hierarchy,
    parentSlug,
    slug
  );

  const hasChildrenAndActive = menuItem =>
    menuItem.children &&
    Object.hasOwnProperty.call(menuItem, 'active') &&
    menuItem.active;

  const Menu = ({ menuItems, menuDepth = 0 }) => (
    <UnorderedList menuDepth={menuDepth}>
      {menuItems.map((menuItem, i) => (
        <Fragment key={i}>
          <ListItem key={i}>
            <MenuLink
              activePage={menuItem.slug === slug}
              activeParent={menuItem.active}
              internalLink={{ slug: menuItem.fullSlug }}
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

  if (!currentPageHierarchy) return null;
  return (
    <PaddedBox>
      <h3>{heading}</h3>
      <Menu menuItems={currentPageHierarchy} />
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
  parentSlug: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
    })
  ),
  slug: PropTypes.string.isRequired,
};

export default LegalSideBar;
