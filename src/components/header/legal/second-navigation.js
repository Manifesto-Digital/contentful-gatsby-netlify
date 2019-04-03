import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Location } from '@reach/router';
import { MenuList, ItemLink, SubMenu } from '../navigation/styles';
import {
  SecondHeaderWrapper,
  SecondHeaderBar,
  SubsectionHeader,
  LegalItem,
  MoreItemMenu,
} from './styles';
import { Container } from '../../styled/containers';
import useToggle from '../../../utils/useToggle';
import { SubNavButton, ArrowSVG } from '../navigation/styles-icons';
import AngleRight from '../../../assets/svg/icons/chevron-down-light.svg';

const SecondNavigation = ({ professionalsMenuItem }) => {
  console.log('props');
  const [moreMenuOpen, setMoreMenuState] = useToggle(false);

  if (!professionalsMenuItem || !professionalsMenuItem.childNavigationsItems) {
    return null;
  }
  const childMenuItems = professionalsMenuItem.childNavigationsItems;
  const itemsToShow = childMenuItems.slice(0, 4);
  const moreItems = childMenuItems.length > 4 ? childMenuItems.slice(4) : null;

  console.log('itemsToShow', itemsToShow);

  return (
    <SecondHeaderWrapper>
      <Container noMobilePadding>
        <SecondHeaderBar>
          <SubsectionHeader>Professionals</SubsectionHeader>
          <MenuList role="menubar" aria-hidden="false">
            {itemsToShow.map((navLink, i) => (
              <LegalItem key={i} role="menuitem">
                <ItemLink internalLink={navLink.navigationLink[0]}>
                  {navLink.menuLabel}
                </ItemLink>
              </LegalItem>
            ))}
            {moreItems && (
              <LegalItem role="menuitem">
                more
                <SubNavButton
                  type="button"
                  onClick={() => setMoreMenuState()}
                  aria-expanded={moreMenuOpen}
                >
                  <ArrowSVG src={AngleRight} cacheGetRequests />
                </SubNavButton>
                <SubMenu
                  active={moreMenuOpen}
                  aria-expanded={moreMenuOpen}
                  aria-hidden={!moreMenuOpen}
                  role="menu"
                >
                  {moreItems &&
                    moreItems.map((item, i) => (
                      <LegalItem key={i}>
                        <ItemLink internalLink={item} tabindex="-1">
                          {item.menuLabel}
                        </ItemLink>
                      </LegalItem>
                    ))}
                </SubMenu>
              </LegalItem>
            )}
          </MenuList>
        </SecondHeaderBar>
      </Container>
    </SecondHeaderWrapper>
  );
};

SecondNavigation.propTypes = {
  professionalsMenuItem: PropTypes.object,
};

export default SecondNavigation;
