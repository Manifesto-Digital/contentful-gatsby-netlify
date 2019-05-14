const path = require('path');
const { getChallengeEventPages } = require('../queries/challenge-event-page');

async function createChallengeEventPages(graphql, gatsbyCreatePage) {
  const challengeEventTemplate = path.resolve(
    'src/templates/challenge-event.js'
  );

  // Get press release pages
  const eventPages = await getChallengeEventPages(graphql);

  if (eventPages.errors) {
    throw Error(eventPages.errors);
  }

  const challengeEvents = eventPages.data.allContentfulPageChallengeEvent.edges;

  // Create single pages
  challengeEvents.forEach(({ node }) => {
    if (!node.slug) return;
    const { menuParent, slug } = node;

    gatsbyCreatePage({
      path: node.slug,
      component: challengeEventTemplate,
      context: {
        slug,
        menuParent,
      },
    });
  });
}
module.exports = createChallengeEventPages;
