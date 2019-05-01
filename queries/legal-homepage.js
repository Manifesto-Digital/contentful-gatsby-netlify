const getLegalHomepage = async graphql =>
  graphql(`
    {
      contentfulPageLegalHomepage(
        contentful_id: { eq: "1N0cP5yqZthVRbc68IARPd" }
      ) {
        id
        slug
      }
    }
  `);

module.exports = { getLegalHomepage };
