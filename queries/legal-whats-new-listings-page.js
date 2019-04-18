const getLegalWhatsNewListingsPages = async graphql =>
  graphql(`
    {
      contentfulPageAssemblyLegalWhatsNewPage(
        contentful_id: { eq: "6jwAyYxlzEgT0f6F7c7aLu" }
      ) {
        id
        title
        introductoryText {
          id
          json
        }
        featuredLegalPage {
          id
          title
          slug
          lastAmended
          pageInformation {
            shortDescription {
              shortDescription
            }
          }
        }
      }
      allContentfulPageAssemblyLegalPage(
        sort: { fields: lastAmended, order: DESC }
      ) {
        edges {
          node {
            slug
            id
          }
        }
      }
    }
  `);
module.exports = { getLegalWhatsNewListingsPages };
