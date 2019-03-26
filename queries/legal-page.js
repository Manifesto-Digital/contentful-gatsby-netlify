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
              menuItem {
                fields {
                  pageInformation {
                    en_GB {
                      fields {
                        shortDescription {
                          en_GB
                        }
                      }
                    }
                  }
                  slug {
                    en_GB
                  }
                }
              }
              label
            }
          }
        }
      }
    }
  `);
module.exports = { getLegalPages };
