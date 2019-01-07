require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'Shelter Website',
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
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
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
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    'gatsby-plugin-offline',
    '@contentful/gatsby-transformer-contentful-richtext',
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: 'GTM-WWSW2HH',

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: true,
      },
    },
  ],
}
