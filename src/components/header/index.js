import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Navigation from './navigation';
import { Overlay } from '../styled/overlay';
import LogoSVG from '../../assets/svg/icons/logo.svg';
import MenuSVG from '../../assets/svg/icons/menu.svg';
import useToggle from '../../utils/useToggle';
import {
  HeaderWrapper,
  HeaderBar,
  LogoWrapper,
  Logo,
  MobileMenuOpen,
  BurgerIcon,
} from './styles';

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
              ... on ContentfulPageAssemblyContentPage {
                title
                slug
              }
            }
            subNavigationItems {
              ... on ContentfulPageAssemblyPressReleasePage {
                title
                slug
              }
              ... on ContentfulPageAssemblyContentPage {
                title
                slug
              }
              ... on ContentfulPageAssemblyAdvicePage {
                title
                slug
              }
            }
          }
          additionalLink {
            id
            internal {
              type
            }
            ... on ContentfulPageAssemblyContentPage {
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
  return (
    <>
      <HeaderWrapper>
        <HeaderBar>
          <LogoWrapper to="/">
            <Logo src={LogoSVG} cacheGetRequests />
          </LogoWrapper>
          <MobileMenuOpen type="button" onClick={openState} active={isOpen}>
            <BurgerIcon src={MenuSVG} cacheGetRequests />
          </MobileMenuOpen>
        </HeaderBar>
      </HeaderWrapper>
      <Navigation pageData={pageData} active={isOpen} openState={openState} />
      <Overlay active={isOpen} />
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
