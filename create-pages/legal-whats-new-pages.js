const path = require('path');
const {
  getLegalWhatsNewListingsPages,
} = require('../queries/legal-whats-new-listings-page');

async function createLegalWhatsNewPages(graphql, gatsbyCreatePage) {
  const whatsNewPageListingsTemplate = path.resolve(
    'src/templates/legal-whats-new-list.js'
  );

  // Get legal whats new single page and all legal pages to build pagination,
  const legalWhatsNewPages = await getLegalWhatsNewListingsPages(graphql);

  if (legalWhatsNewPages.errors) {
    throw Error(legalWhatsNewPages.errors);
  }

  const legalPages =
    legalWhatsNewPages.data.allContentfulPageAssemblyLegalPage.edges;

  const legalWhatsNewPage =
    legalWhatsNewPages.data.contentfulPageAssemblyLegalWhatsNewPage;

  // Page information, including intro text and featured legal page that will be passed to all pages
  const { id, title, introductoryText, featuredLegalPage } = legalWhatsNewPage;

  const postsPerPage = 2; // One more than will show as there is a featured item that will potentially be filtered out
  const numPages = Math.ceil(legalPages.length / postsPerPage);

  Array.from({ length: numPages }).forEach((_, i) =>
    gatsbyCreatePage({
      path: i === 0 ? `/legal/whats-new` : `/legal/whats-new/${i + 1}`,
      component: whatsNewPageListingsTemplate,
      context: {
        id,
        title,
        introductoryText,
        featuredLegalPage,
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  );
}

module.exports = createLegalWhatsNewPages;
