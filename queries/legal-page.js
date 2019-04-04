const getLegalPages = async graphql =>
  graphql(`
    {
      allContentfulPageAssemblyLegalPage {
        edges {
          node {
            id
            slug
            title
            pageInformation {
              shortDescription {
                shortDescription
              }
            }
            parentSlug {
              label
              title
              slug
              menuItem {
                fields {
                  shortDescription {
                    en_GB
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

module.exports = { getLegalPages };
