const { MARKS, BLOCKS, INLINES } = require('@contentful/rich-text-types');

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
        icon: 'src/assets/images/gatsby-icon.png', // This path is relative to the root of the site.
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
    {
      resolve: '@contentful/gatsby-transformer-contentful-richtext',
      options: {
        renderOptions: {
          /*
           * Defines custom html string for each node type like heading, embedded entries etc..
           */

          renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: node => {
              const imageObject = node.data.target.fields;
              const { url } = node.data.target.fields.file['en-GB'];
              const file = url.substring(url.lastIndexOf('/') + 1);
              const alt = Object.prototype.hasOwnProperty.call(
                imageObject,
                'description'
              )
                ? imageObject.description['en-GB']
                : '';
              if (file.match(/\.(jpeg|jpg|gif|png)$/)) {
                return `<img
                  class='embedded-in-richtext'
                  data-BLOCKS.EMBEDDED_ASSET
                  src="${url}"
                  alt="${alt}"
                />`;
              }
            },
            [INLINES.ENTRY_HYPERLINK]: (node, next) => {
              // There is currently a patch for Gatsby source contentful to avoid a max stack call
              // created by links in rich text. The only field that is set currently on the target
              // is the slug field
              if (
                !node.content ||
                !node.data.target.fields ||
                !node.data.target.fields.slug
              ) {
                return;
              }
              return `<a href='/${
                node.data.target.fields.slug['en-GB']
              }'>${next(node.content)}</a>`;
            },
          },

          /*
           * Defines custom html string for each mark type like bold, italic etc..
           */
          renderMark: {
            // Example
            [MARKS.BOLD]: text => `<strong>${text}</strong>`,
          },
        },
      },
    },
  ],
};
