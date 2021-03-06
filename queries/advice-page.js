/**
 *
 * The filter below searches up to the parent of this page and checks if it is referenced as a subpage,
 * if this is eq: null then this is a top level advice page.
 *
 * The subpages are therefore still generated as they will be subpages of at least one advice page.
 *
 * The component___sub_pages filter option is available as the only content model that the subpage can take is a Advice page assembly
 *
 */
const { PagesFragment } = require('./pages-fragment');

const getAdvicePages = async graphql =>
  graphql(`
    {
      allContentfulPageAdvice(
        filter: { component___sub_pages: { elemMatch: { id: { eq: null } } } }
      ) {
        edges {
          node {
            title
            id
            slug
              menuParent {
              ... on ContentfulComponentUrlHierarchy {
                menuItem {
                  ${PagesFragment}
                }
              }
            }
            subPages {
              title
              pages {
                id
                slug
                title
              }
            }
          }
        }
      }
    }
  `);
module.exports = { getAdvicePages };
