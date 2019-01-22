import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Overlay } from '../styled/overlay';
import LogoSVG from '../../assets/svg/icons/logo.svg';
import MenuSVG from '../../assets/svg/icons/menu.svg';
import Navigation from '../navigation';

import useToggle from '../../utils/useToggle';
import {
  HeaderWrapper,
  HeaderBar,
  LogoWrapper,
  Logo,
  Open,
  StyledMenuSVG,
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
        }
      }
    }
  }
`;

const Header = () => {
  const [isOpen, openState] = useToggle(false);

  return (
    <StaticQuery
      query={navigationQuery}
      render={data => (
        <>
          <HeaderWrapper>
            <HeaderBar>
              <LogoWrapper>
                <Logo src={LogoSVG} cacheGetRequests />
              </LogoWrapper>
              <Open type="button" onClick={openState} active={isOpen}>
                <StyledMenuSVG src={MenuSVG} />
              </Open>
            </HeaderBar>
          </HeaderWrapper>
          <Navigation
            data={data.allContentfulAssemblyNavigationMenu.edges[0].node}
            active={isOpen}
            openState={openState}
          />
          <Overlay active={isOpen} />
        </>
      )}
    />
  );
};

export default Header;
