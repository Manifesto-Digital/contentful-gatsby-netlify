const getPressReleaseListingsPages = async graphql =>
  graphql(`
    {
      contentfulPagePressReleaseListings(
        contentful_id: { eq: "JUBOh9y8Zfuml1s2SQQTg" }
      ) {
        slug
        title
        subHeading
      }
    }
  `);

module.exports = { getPressReleaseListingsPages };
