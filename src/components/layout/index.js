import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

// Styles
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../theme/global';
import theme from '../theme/variables';

// Component
import Header from '../header';
import Footer from '../footer';

const Layout = ({ children, removeFooterMargin }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
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
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          >
            <html lang="en" />
          </Helmet>
          <Header siteTitle={data.site.siteMetadata.title} />
          <main role="main" id="main">
            {children}
          </main>
          <Footer removeMarginTop={removeFooterMargin} />
        </>
      </ThemeProvider>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  removeFooterMargin: PropTypes.bool,
};

export default Layout;
