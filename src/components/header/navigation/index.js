import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NavigationMenu from './navigation-menu';

import { Close, StyledMenuSVG } from './styles-icon';
import { Wrapper, Menus, AdditionalMenu, ItemLink } from './styles';
import CloseSVG from '../../../assets/svg/icons/times-light.svg';

const Navigation = ({ data, active, openState }) => {
  const [activeMenu, setActiveMenu] = useState('');
  const { navigationItems, additionalLink } = data;

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
        <StyledMenuSVG src={CloseSVG} />
      </Close>
      <Menus>
        {navigationItems &&
          navigationItems.map((item, i) => (
            <NavigationMenu
              key={i}
              id={item.id}
              data={item}
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
  data: PropTypes.shape({
    navigationItems: PropTypes.array,
  }),
};

export default Navigation;
