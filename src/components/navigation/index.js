import React from 'react';
import PropTypes from 'prop-types';

import NavigationItem from './navigation-item';
import CloseSVG from '../../assets/svg/icons/times-light.svg';
import { Close, MenuWrapper, StyledMenuSVG, Inner } from './styles';

const Navigation = ({ data, active, openState }) => {
  const { navigationItems } = data;
  return (
    <MenuWrapper active={active} ariaHidden={active}>
      <Close type="button" onClick={openState} active={active}>
        <StyledMenuSVG src={CloseSVG} />
      </Close>
      <Inner>
        {navigationItems &&
          navigationItems.map((item, i) => (
            <NavigationItem key={i} data={item} />
          ))}
      </Inner>
    </MenuWrapper>
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
