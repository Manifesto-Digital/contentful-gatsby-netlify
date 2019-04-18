import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Navigation from './navigation';
import SearchDonate from './search-donate';
import LogoSVG from '../../assets/svg/icons/logo.svg';
import MenuSVG from '../../assets/svg/icons/menu.svg';
import MagGlass from '../../assets/svg/icons/search-light.svg';
import useToggle from '../../utils/useToggle';
import {
  HeaderWrapper,
  HeaderBar,
  LogoWrapper,
  Logo,
  MobileMenuOpen,
  BurgerIcon,
  MenuControls,
} from './styles';
import { Container } from '../styled/containers';

const navigationQuery = graphql`
  query navigationItemsQuery {
    allContentfulAssemblyNavigationMenu(
      filter: { id: { eq: "e230d8b8-4ee6-5d4c-bf25-57af664d12d7" } }
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
              ... on ContentfulPageContent {
                title
                slug
              }
            }
            childNavigationItems {
              menuLabel
              navigationLink {
                ...LinkFragment
              }
            }
          }
          additionalLink {
            id
            internal {
              type
            }
            ... on ContentfulPageContent {
              title
              slug
            }
          }
        }
      }
    }
  }
`;

export const PureHeader = ({ pageData }) => {
  const [isOpen, openState] = useToggle(false);
  const [searchOpen, searchState] = useToggle(false);

  return (
    <>
      <HeaderWrapper>
        <Container noMobilePadding>
          <HeaderBar>
            <LogoWrapper to="/">
              <Logo src={LogoSVG} cacheGetRequests />
            </LogoWrapper>
            <MenuControls>
              <SearchDonate resolution="desktop" />

              <MobileMenuOpen
                type="button"
                onClick={() => {
                  openState();
                  searchState();
                }}
                active={isOpen}
                aria-expanded={isOpen}
              >
                <BurgerIcon src={MagGlass} cacheGetRequests />
              </MobileMenuOpen>
              <MobileMenuOpen
                type="button"
                onClick={openState}
                active={isOpen}
                aria-expanded={isOpen}
              >
                <BurgerIcon src={MenuSVG} cacheGetRequests />
              </MobileMenuOpen>
            </MenuControls>
          </HeaderBar>
        </Container>
      </HeaderWrapper>
      <Navigation
        pageData={pageData}
        active={isOpen}
        searchFocus={searchOpen}
        openState={openState}
        searchState={searchState}
      />
    </>
  );
};

const Header = () => (
  <StaticQuery
    query={navigationQuery}
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
