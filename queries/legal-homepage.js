const getLegalHomepage = async graphql =>
  graphql(`
    {
      contentfulPageAssemblyLegalHomepage(
        contentful_id: { eq: "1N0cP5yqZthVRbc68IARPd" }
      ) {
        id
        slug
      }
    }
  `);

module.exports = { getLegalHomepage };
