import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import LogoSVG from '../../assets/svg/icons/logo.svg';
import Icon from '../share-block/icon';
import { consistentString } from '../../utils/content-formatting';
import { Container } from '../styled/containers';
import RichText from '../rich-text';
import NavigationMenu from './navigation';
import {
  Wrapper,
  Top,
  Social,
  Menus,
  Angle,
  Bottom,
  BottomInner,
  Text,
  LogoWrapper,
  Logo,
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

export const PureFooter = ({ pageData }) => {
  const { footerText, shareType, navigationItems } = pageData;
  return (
    <Wrapper>
      <Top>
        <Container>
          <Menus>
            <Social>
              {shareType &&
                shareType.map((type, i) => (
                  <Icon key={i} icon={consistentString(type)} />
                ))}
            </Social>
            <Menus role="navigation" aria-label="Footer menu">
              {navigationItems &&
                navigationItems.map((item, i) => (
                  <NavigationMenu key={i} id={item.id} pageData={item} />
                ))}
            </Menus>
          </Menus>
        </Container>
      </Top>
      <Bottom>
        <Angle />
        <Container>
          <BottomInner>
            <Text as={RichText} richText={footerText} />
            <LogoWrapper to="/">
              <Logo src={LogoSVG} cacheGetRequests />
            </LogoWrapper>
          </BottomInner>
        </Container>
      </Bottom>
    </Wrapper>
  );
};

const Footer = () => (
  <StaticQuery
    query={footerQuery}
    render={data => (
      <PureFooter pageData={data.allContentfulAssemblyFooter.edges[0].node} />
    )}
  />
);

PureFooter.propTypes = {
  pageData: PropTypes.object.isRequired,
};

export default Footer;
