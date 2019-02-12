const path = require('path');
const { getEventPages } = require('../queries/event-page');

async function createPressReleasePages(graphql, gatsbyCreatePage) {
  const challengeEventTemplate = path.resolve(
    'src/templates/challenge-event.js'
  );

  // Get press release pages
  const eventPages = await getEventPages(graphql);

  if (eventPages.errors) {
    throw Error(eventPages.errors);
  }

  const challengeEvents =
    eventPages.data.allContentfulPageAssemblyChallengeEvent.edges;

  // Create single pages
  challengeEvents.forEach(({ node }) => {
    if (!node.slug) return;
    gatsbyCreatePage({
      path: node.slug,
      component: challengeEventTemplate,
      context: {
        slug: node.slug,
      },
    });
  });
}
module.exports = createPressReleasePages;
