import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import LogoSVG from '../../assets/svg/icons/logo.svg';
import Icon from '../share-block/icon';
import { consistentString } from '../../utils/content-formatting';
import { Container } from '../styled/containers';
import RichText from '../rich-text';
import AccordionHandler from '../accordion/handler';

import NavigationMenu from './navigation';
import {
  Wrapper,
  Top,
  Social,
  Menus,
  Bottom,
  BottomInner,
  LogoWrapper,
  Logo,
  FooterAccordion,
  ContentWrapper,
} from './styles';

const footerQuery = graphql`
  query footerItemsQuery {
    allContentfulAssemblyFooter(
      filter: { id: { eq: "212aa2ec-1643-592c-8ebe-d267f9250a11" } }
    ) {
      edges {
        node {
          id
          name
          shareType
          footerText {
            id
            childContentfulRichText {
              html
            }
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
              ... on Node {
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
  }
`;

export const PureFooter = ({ pageData, removeMarginTop }) => {
  const { footerText, shareType, navigationItems } = pageData;

  return (
    <Wrapper removeMarginTop={removeMarginTop}>
      <Top>
        <Container noMobilePadding>
          <Menus aria-label="Footer menu">
            {navigationItems && (
              <AccordionHandler
                mobileOnly
                render={childrenState =>
                  navigationItems.map((item, i) => (
                    <FooterAccordion
                      key={i}
                      header={item.menuLabel}
                      active={childrenState}
                      id={`footer-accordion-menu-${i + 1}`}
                      footer
                    >
                      <NavigationMenu key={i} id={item.id} pageData={item} />
                    </FooterAccordion>
                  ))
                }
              />
            )}
          </Menus>
        </Container>
      </Top>
      <Bottom>
        <Container>
          <BottomInner>
            <ContentWrapper>
              <Social>
                {shareType &&
                  shareType.map((type, i) => (
                    <Icon key={i} icon={consistentString(type)} />
                  ))}
              </Social>
              <RichText richText={footerText} />
            </ContentWrapper>
            <LogoWrapper to="/">
              <Logo src={LogoSVG} cacheGetRequests />
            </LogoWrapper>
          </BottomInner>
        </Container>
      </Bottom>
    </Wrapper>
  );
};

const Footer = ({ removeMarginTop }) => (
  <StaticQuery
    query={footerQuery}
    render={data => (
      <PureFooter
        removeMarginTop={removeMarginTop}
        pageData={data.allContentfulAssemblyFooter.edges[0].node}
      />
    )}
  />
);

Footer.propTypes = {
  removeMarginTop: PropTypes.bool,
};

PureFooter.propTypes = {
  pageData: PropTypes.object.isRequired,
  removeMarginTop: PropTypes.bool,
};

export default Footer;
