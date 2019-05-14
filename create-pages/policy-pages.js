const path = require('path');
const { getPolicyPages } = require('../queries/policy-page');

async function createPolicyPages(graphql, gatsbyCreatePage) {
  const policyPageTemplate = path.resolve('src/templates/policy-page.js');

  // Create pages
  const policyPages = await getPolicyPages(graphql);

  if (policyPages.errors) {
    console.error(policyPages.errors);
    throw Error(policyPages.errors);
  }

  // Create pages
  policyPages.data.allContentfulPagePolicy.edges.forEach(({ node }) => {
    if (!node.slug) return;
    const { menuParent, slug } = node;

    gatsbyCreatePage({
      path: node.slug,
      component: policyPageTemplate,
      context: {
        slug,
        menuParent,
      },
    });
  });
}

module.exports = createPolicyPages;
