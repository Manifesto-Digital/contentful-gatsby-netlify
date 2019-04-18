const getLegalWhatsNewListingsPages = async graphql =>
  graphql(`
    {
      contentfulPageLegalWhatsNew(
        contentful_id: { eq: "6jwAyYxlzEgT0f6F7c7aLu" }
      ) {
        id
        title
        introductoryText {
          id
          childContentfulRichText {
            html
          }
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
      allContentfulPageLegal(sort: { fields: lastAmended, order: DESC }) {
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
