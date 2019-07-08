import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import LogoSVG from '../../assets/svg/icons/logo.svg';
import Icon from '../share-block/icon';
import { consistentString } from '../../utils/content-formatting';
import { Container } from '../styled/containers';
import RichText from '../rich-text';
import AccordionHandler from '../accordion/handler';

import MenuItem from './menu-item';
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
  SiteDate,
  Text,
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
            json
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
                      <MenuItem key={i} id={item.id} pageData={item} />
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
              <Text>
                <small>
                  <SiteDate>{`© ${new Date().getFullYear()}`} </SiteDate>
                  <RichText richText={footerText} />
                </small>
              </Text>
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
