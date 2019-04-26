require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Shelter England',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-netlify`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
    'gatsby-plugin-eslint',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/shelter-favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        prettier: true,
        svgo: true,
        svgoConfig: {
          cleanupAttrs: true,
          inlineStyles: true,
          removeDoctype: true,
          removeXMLProcInst: true,
          removeComments: true,
          removeMetadata: true,
          removeTitle: true,
          removeDesc: true,
          removeUselessDefs: true,
          removeXMLNS: true,
          removeScriptElement: true,
        },
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId:
          process.env.GATSBY_CONTENTFUL_SPACE_ID || process.env.ctfl_spaceId,
        accessToken:
          process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN ||
          process.env.ctfl_accessToken,
        host: process.env.GATSBY_CONTENTFUL_HOST || process.env.ctfl_host,
        environment: process.env.GATSBY_CONTENTFUL_ENVIRONMENT || 'master',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: 'GTM-WWSW2HH',
        includeInDevelopment: true,
      },
    },
  ],
};
