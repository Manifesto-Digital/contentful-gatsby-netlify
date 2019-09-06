import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import { sendEvent } from '../../utils/analytics';
import { dateAsString } from '../../utils/dates';
// Styles
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
  createdAt,
  updatedAt,
  contentType,
}) => {
  const description =
    pageInformation && pageInformation.seoDescription
      ? pageInformation.seoDescription.internal.content
      : '';
  const title =
    pageInformation && pageInformation.setTitle
      ? pageInformation.seoTitle
      : pageTitle;

  useEffect(() => {
    // Analytics event, page view is fired on gatsby-route-change which occurs after
    sendEvent({
      contentType,
      pageTitle: title,
      contentPublishedDate: `${dateAsString(createdAt, 'DD/MM/YYYY')}`,
      contentModifiedDate: `${dateAsString(updatedAt, 'DD/MM/YYYY')}`,
    });
  }, [contentType, createdAt, title, updatedAt]);

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
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string,
  contentType: PropTypes.string,
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
