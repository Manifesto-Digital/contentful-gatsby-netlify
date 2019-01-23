import React from 'react';
import PropTypes from 'prop-types';

import { SubNavButton, ArrowSVG } from './styles-icon';
import { MenuWrap, SubMenuWrap, ItemLink, ItemWrap } from './styles';
import AngleRight from '../../../assets/svg/icons/chevron-down-light.svg';

const NavigationMenu = ({ data, id, menuOpen, setActiveMenu }) => {
  const { menuLabel, navigationLink, subNavigationItems } = data;

  return (
    <MenuWrap>
      {navigationLink &&
        navigationLink.map((navLink, i) => (
          <ItemWrap key={i}>
            <ItemLink to={navLink.slug}>{menuLabel || navLink.title}</ItemLink>
            {subNavigationItems && (
              <SubNavButton onClick={() => setActiveMenu(id)} type="button">
                <ArrowSVG src={AngleRight} cacheGetRequests />
              </SubNavButton>
            )}
          </ItemWrap>
        ))}
      {subNavigationItems && (
        <SubMenuWrap active={menuOpen}>
          {subNavigationItems.map((item, i) => (
            <ItemLink key={i} to={item.slug}>
              {item.title}
            </ItemLink>
          ))}
        </SubMenuWrap>
      )}
    </MenuWrap>
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
