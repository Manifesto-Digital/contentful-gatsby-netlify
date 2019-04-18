const getPressReleaseListingsPages = async graphql =>
  graphql(`
    {
      contentfulPageAssemblyPressReleaseListingsPage(
        contentful_id: { eq: "JUBOh9y8Zfuml1s2SQQTg" }
      ) {
        slug
        title
        subHeading
      }
    }
  `);

module.exports = { getPressReleaseListingsPages };
