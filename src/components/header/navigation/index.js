import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NavigationMenu from './navigation-menu';

import { Close, MenuSVG } from './styles-icons';
import { Wrapper, Menus, AdditionalMenu, ItemLink } from './styles';
import CloseSVG from '../../../assets/svg/icons/times-light.svg';

const Navigation = ({ pageData, active, openState }) => {
  const [activeMenu, setActiveMenu] = useState('');
  const { navigationItems, additionalLink } = pageData;

  const updateActiveMenu = id => {
    if (id === activeMenu) {
      setActiveMenu(false);
    } else {
      setActiveMenu(id);
    }
  };

  return (
    <Wrapper active={active} ariaHidden={active}>
      <Close type="button" onClick={openState} active={active}>
        <MenuSVG src={CloseSVG} />
      </Close>
      <Menus>
        {navigationItems &&
          navigationItems.map((item, i) => (
            <NavigationMenu
              key={i}
              id={item.id}
              pageData={item}
              menuOpen={activeMenu === item.id}
              setActiveMenu={updateActiveMenu}
            />
          ))}
        {additionalLink && (
          <AdditionalMenu>
            <ItemLink to={additionalLink[0].slug}>
              {additionalLink[0].menuLabel || additionalLink[0].title}
            </ItemLink>
            <ItemLink to="https://scotland.shelter.org.uk/">Scotland</ItemLink>
          </AdditionalMenu>
        )}
      </Menus>
    </Wrapper>
  );
};

Navigation.propTypes = {
  active: PropTypes.bool.isRequired,
  openState: PropTypes.func,
  pageData: PropTypes.shape({
    navigationItems: PropTypes.array,
  }),
};

export default Navigation;
