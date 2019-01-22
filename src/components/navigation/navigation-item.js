import React from 'react';
import PropTypes from 'prop-types';
import useToggle from '../../utils/useToggle';
import AngleRight from '../../assets/svg/icons/chevron-down-light.svg';
import {
  NavigationWrap,
  SubNavigationWrap,
  SubNavButton,
  Item,
  ItemWrap,
  ArrowSVG,
} from './styles';

const NavigationItem = ({ data }) => {
  const [isOpen, openState] = useToggle(false);
  const { navigationLink, subNavigationItems } = data;
  return (
    <NavigationWrap>
      {navigationLink &&
        navigationLink.map((navLink, i) => (
          <ItemWrap>
            <Item key={i} href={navLink.slug}>
              {navLink.title}
            </Item>
            {subNavigationItems && (
              <SubNavButton onClick={openState} type="button">
                <ArrowSVG src={AngleRight} cacheGetRequests />
              </SubNavButton>
            )}
          </ItemWrap>
        ))}
      {subNavigationItems && (
        <SubNavigationWrap active={isOpen}>
          {subNavigationItems.map((item, i) => (
            <Item key={i} href={item.slug}>
              {item.title}
            </Item>
          ))}
        </SubNavigationWrap>
      )}
    </NavigationWrap>
  );
};

NavigationItem.propTypes = {
  data: PropTypes.shape({
    navigationLink: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
      })
    ),
  }),
};

export default NavigationItem;
