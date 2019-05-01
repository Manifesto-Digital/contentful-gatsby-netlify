# Local Setup and Workflows

## Table of contents

- [Local Setup and Workflows](#local-setup-and-workflows)
  - [Table of contents](#table-of-contents)
  - [Running locally](#running-locally)
        - [Add queries to create page](#add-queries-to-create-page)
        - [A Page template Query](#a-page-template-query)
        - [Create a fragment](#create-a-fragment)
      - [Adding to a list of assemblies](#adding-to-a-list-of-assemblies)

## Running locally

HOW TO SOURCE ENV FILES HERE //TODO:

- Clone the repository
- Install dependencies `yarn install`
- Add the `.env.development` and `.env.production` files into root
- Run `yarn develop`

If encountered errors while running locally then check the debugging section.

## Typical workflows
A high level view of how content flows into gatsby can be found here // TODO: add link. If you are requiring content structure changes in contentful then please follow the next steps.

If no content changes are needed skip to components // TODO: figure out link here

### Contentful content model creation or changed
:exclamation: Always follow contentful conventions// TODO: link here

//TODO: if not modifying page link

#### New Page

##### Add queries to create page

In gatsby-node.js we have multiple function calls that are stored in `create-pages/`. The Gatsby createPage that is exposed is passed to the external functions. This is purely organisational.

###### Add the new page query
Inside `/queries` you can see many examples of querying a page content model. Here is a simple example:

```
const getContentPages = async graphql =>
  graphql(`
    {
      allContentfulPageAssemblyContentPage {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);

module.exports = { getContentPages };
```

The above GraphQL query is requesting all the content of type `PageAssemblyContentPage` and has the filename `content-page.js`. // TODO: graphql playground link

###### Create a file in create-pages
Depending on the use-case the logic inside this file could vary greatly, the following is the most simplest example. It will do the following:

- Query the page content from the schema (generated from contentful)
- Loop through every piece of content for that content model
- Create a static html page for each

**The simple example is shown below in full**

```
const path = require('path');
const { getContentPages } = require('../queries/content-page');

async function createContentPages(graphql, gatsbyCreatePage) {
  const contentPageTemplate = path.resolve('src/templates/page.js');

  // Create pages
  const pages = await getContentPages(graphql);

  if (pages.errors) {
    console.error(pages.errors);
    throw Error(pages.errors);
  }

  // Create pages
  pages.data.allContentfulPageAssemblyContentPage.edges.forEach(({ node }) => {
    if (!node.slug) return;
    gatsbyCreatePage({
      path: node.slug,
      component: contentPageTemplate,
      context: {
        slug: node.slug,
      },
    });
  });
}

module.exports = createContentPages;
```

The `gatsbyCreatePage` function has been passed from gatsby-node.js. The paramaters are:

- path - **slug**
- component - **which template to use as the entry point (receives the path as slug in the GraphQL query in that template)**
- context - **An object to be passed, that will be ava1able as a pageContext prop**

#### Page modification
If the name has changed as mentioned in the gotcha here // TODO: link then the query to fetch the page and the query in the template itself will have to be updated.

#### New Component
:exclamation: Always follow contentful conventions// TODO: link here

After creating the new component content type in most cases this will also need to be added to a page template.

##### A Page template Query

At the bottom of every page template (`/src/templates`) there is a GraphQl query. The slug has been passed automatically from the `createPage` function. This allows us to query for the piece of content that will make up this page.

The result of that query is made available automatically as `data` props in the React component that is within the same file. :tada:

If the component is re-usable then a fragment should be made.

##### Create a fragment

We have a folder for fragments `src/fragments` there will be many examples here on the different uses. **Fragments can be used within fragments**
https://www.gatsbyjs.org/docs/querying-with-graphql/#fragments

To check where in the GraphQL query to query for the new component use the playground to see what schema is available // TODO: link to playground

#### Adding to a list of assemblies

The term assemblies in this case is just a multi-ref field in contentful that can link to different content types. The return value is an array of objects, with each object being the component content model added to that assembly.

We then loop through the returned array of assemblies to determine which React component to render for each content item in the assembly. Because of this we also need to query for an identifiable id on the component. **Each components fragment requires the type and id returned from the query** The following schema values are generated automatically and are required to be added to every component query.

```
    id
    internal {
      type
    }
```

The array is then looped in the assemblies file (currently `src/assemblies/index`). If the type matches the id of the piece of content we are expecting then the React Component is called for that component.
