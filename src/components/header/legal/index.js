import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { Location } from '@reach/router';
import LegalNavigation from './navigation';

import NavigationMenuItem from '../navigation/menu-item';
import LogoSVG from '../../../assets/svg/icons/logo.svg';
import MenuSVG from '../../../assets/svg/icons/menu.svg';
import MagGlass from '../../../assets/svg/icons/search-light.svg';
import useToggle from '../../../utils/useToggle';
import {
  HeaderWrapper,
  HeaderBar,
  LogoWrapper,
  Logo,
  MobileMenuOpen,
  BurgerIcon,
  MenuControls,
} from '../styles';
import { Container } from '../../styled/containers';
import SecondNavigation from './second-navigation';

const legalNavigationQuery = graphql`
  query legalNavigationQuery {
    allContentfulAssemblyNavigationMenu(
      filter: { contentful_id: { eq: "4Yj86iJFRXCpjuQdNL950t" } }
    ) {
      edges {
        node {
          id
          name
          internal {
            type
          }
          navigationItems {
            id
            internal {
              type
            }
            menuLabel
            navigationLink {
              ...LinkFragment
            }
            childNavigationItems {
              menuLabel
              navigationLink {
                ...LinkFragment
              }
              childNavigationItems {
                menuLabel
                navigationLink {
                  ...LinkFragment
                }
              }
            }
            subNavigationItems {
              ...LinkFragment
            }
          }
          additionalLink {
            ...LinkFragment
          }
        }
      }
    }
  }
`;

export const PureHeader = ({ pageData }) => {
  const [isOpen, openState] = useToggle(false);
  const [searchOpen, searchState] = useToggle(false);
  const { navigationItems } = pageData;
  console.log('pagedata', pageData);
  const professionalsMenuItem = navigationItems
    ? navigationItems.find(item => item.menuLabel === 'Professionals')
    : null;
  console.log('professionalsMenuItem', professionalsMenuItem);

  return (
    <header>
      <HeaderWrapper>
        <Container noMobilePadding>
          <HeaderBar>
            <LogoWrapper to="/">
              <Logo src={LogoSVG} cacheGetRequests />
            </LogoWrapper>
            <MenuControls>
              <MobileMenuOpen
                type="button"
                onClick={openState}
                active={isOpen}
                aria-expanded={isOpen}
              >
                <BurgerIcon src={MenuSVG} cacheGetRequests />
              </MobileMenuOpen>
            </MenuControls>
            <LegalNavigation
              navigationItems={navigationItems}
              active={isOpen}
              searchFocus={searchOpen}
              openState={openState}
              searchState={searchState}
            />
          </HeaderBar>
        </Container>
      </HeaderWrapper>
      {professionalsMenuItem && (
        <Location>
          {({ location }) => (
            <SecondNavigation
              location={location}
              professionalsMenuItem={professionalsMenuItem}
            />
          )}
        </Location>
      )}
    </header>
  );
};

const Header = () => (
  <StaticQuery
    query={legalNavigationQuery}
    render={data => (
      <PureHeader
        pageData={data.allContentfulAssemblyNavigationMenu.edges[0].node}
      />
    )}
  />
);

PureHeader.propTypes = {
  pageData: PropTypes.object.isRequired,
};

export default Header;
