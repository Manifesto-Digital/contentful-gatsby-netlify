import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

// Styles
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../theme/global';
import theme from '../theme/variables';

// Component
import Header from '../header';
import Footer from '../footer';

const Layout = ({
  children,
  removeFooterMargin,
  pageInformation,
  pageTitle,
}) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Helmet
        title={pageInformation.seoTitle ? pageInformation.seoTitle : pageTitle}
        meta={[
          {
            name: 'description',
            content: pageInformation.seoDescription.internal.content,
          },
        ]}
      >
        <html lang="en" />
      </Helmet>
      <Header />
      <main role="main" id="main">
        {children}
      </main>
      <Footer removeMarginTop={removeFooterMargin} />
    </>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  removeFooterMargin: PropTypes.bool,
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
