const getPressReleaseListingsPages = async graphql =>
  graphql(`
    {
      allContentfulPageAssemblyPressReleaseListingsPage(
        filter: { contentful_id: { eq: "JUBOh9y8Zfuml1s2SQQTg" } }
      ) {
        edges {
          node {
            title
            subHeading
          }
        }
      }
    }
  `);

module.exports = { getPressReleaseListingsPages };
