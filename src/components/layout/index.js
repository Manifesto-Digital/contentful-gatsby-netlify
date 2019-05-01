import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
// Styles
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../theme/global';
import theme from '../theme/variables';
// Components
import LegalHeader from '../header/legal';
import Header from '../header';
import Footer from '../footer';

const Layout = ({
  children,
  removeFooterMargin,
  pageInformation,
  pageTitle,
  legal,
}) => {
  const description = pageInformation
    ? pageInformation.seoDescription.internal.content
    : '';
  const title =
    pageInformation && pageInformation.setTitle
      ? pageInformation.seoTitle
      : pageTitle;

  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyle />
            <Helmet
              title={`${title} - ${data.site.siteMetadata.title}`}
              meta={[
                {
                  name: 'description',
                  content: description,
                },
              ]}
            >
              <html lang="en" />
            </Helmet>
            {legal ? (
              <LegalHeader siteTitle={data.site.siteMetadata.title} />
            ) : (
              <Header siteTitle={data.site.siteMetadata.title} />
            )}
            <main role="main" id="main">
              {children}
            </main>
            <Footer removeMarginTop={removeFooterMargin} />
          </>
        </ThemeProvider>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  removeFooterMargin: PropTypes.bool,
  legal: PropTypes.bool,
  pageInformation: PropTypes.shape({
    seoTitle: PropTypes.string.isRequired,
    seoDescription: PropTypes.shape({
      internal: PropTypes.shape({
        content: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  pageTitle: PropTypes.string.isRequired,
};

export default Layout;
