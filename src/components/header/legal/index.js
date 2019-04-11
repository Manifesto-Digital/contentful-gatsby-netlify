import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { Location } from '@reach/router';
import LegalNavigation from './navigation';
import LogoSVG from '../../../assets/svg/icons/logo.svg';
import MenuSVG from '../../../assets/svg/icons/menu.svg';
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
          }
          additionalLink {
            ...LinkFragment
          }
        }
      }
    }
  }
`;

export const PureLegalHeader = ({ pageData }) => {
  const [isOpen, openState] = useToggle(false);
  const [searchOpen, searchState] = useToggle(false);
  const { navigationItems } = pageData;

  // We only want to show the second level navigation if Professionals item exists
  const professionalsMenuItem = navigationItems
    ? navigationItems.find(item => item.menuLabel === 'Professionals')
    : null;

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

const LegalHeader = () => (
  <StaticQuery
    query={legalNavigationQuery}
    render={data => (
      <PureLegalHeader
        pageData={data.allContentfulAssemblyNavigationMenu.edges[0].node}
      />
    )}
  />
);

PureLegalHeader.propTypes = {
  pageData: PropTypes.object.isRequired,
};

export default LegalHeader;
