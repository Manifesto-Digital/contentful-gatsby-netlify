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
module.exports = createChallengeEventPages;
