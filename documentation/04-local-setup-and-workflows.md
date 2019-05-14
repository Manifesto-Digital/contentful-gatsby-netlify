# Local Setup and Workflows

## Table of contents

- [Local Setup and Workflows](#local-setup-and-workflows)
  - [Table of contents](#table-of-contents)
  - [Running locally](#running-locally)
    - [Steps](#steps)
      - [Add queries to create page](#add-queries-to-create-page)
      - [A Page template Query](#a-page-template-query)
      - [Create a fragment](#create-a-fragment)
      - [Adding to a list of assemblies](#adding-to-a-list-of-assemblies)

## Running locally

You will require a `.env.development` and `.env.production` with the following values.

- `ctfl_spaceId`: Contentful -> Settings -> General Settings
- `ctfl_accessToken`: Contentful -> Settings -> Api keys -> Content Delivery api
- `GOOGLE_MAP_API_KEY`: https://console.cloud.google.com/apis/credentials
- `GATSBY_CONTENTFUL_ENVIRONMENT` : Environment id of your choosing (defaults to master)

### Steps

- Clone the repository
- Install dependencies `yarn install`
- Add the `.env.development` and `.env.production` files into root
- Run `yarn develop`

If you encounter errors while running locally then check the [debugging](./09-debugging-and-gotchas.md) section

## Typical workflows

A high-level view of how content flows into Gatsby can be found [here](./assets/FE-content-flow-overview.jpg). If you require content structure changes in contentful then follow the next steps.

### Contentful content model creation or changed

:exclamation: Always follow [contentful conventions](./08-contentful.md)

If no page content model changes are needed a skip to component creation [New Component](#new-component)

#### New Page

#### Add queries to create a page

In Gatsby-node.js we have multiple function calls that are stored in `create-pages/`. The Gatsby createPage that is exposed is passed to the external functions. This is purely for systematizing the folder structure.

##### Add the new page query

Inside `/queries` you can see many examples of querying a page content model. Here is a simple example:

```javascript
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

The above GraphQL query is requesting all the content of type `PageAssemblyContentPage` and has the filename `content-page.js`. Use the [GraphiQL IDE](./09-debugging-and-gotchas.md#graphiQL-ide) to create and debug the query.

##### Create a file in create-pages

Depending on the use-case the logic inside this file could vary greatly, the following is the simplest example. It will do the following:

- Query the page content from the schema (generated from contentful)
- Loop through every piece of content for that content model
- Create a static HTML page for each

**A simple example**

```javascript
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

The `gatsbyCreatePage` function has been passed from gatsby-node.js. The parameters are:

- **path**: Slug
- **component**: Which template to use as the entry point (receives the path as a slug in the GraphQL query in that template)
- **context**: An object to be passed, that will be available as a `pageContext` prop

:bulb: Data passed to context is available in page queries as GraphQL variables.

##### Add New Page creation in gatsby-node

After adding all the page creation logic. Require the file and then call the default exported function and pass through the necessary params. The single example below.

```javascript
const createMyNewPage = require('./create-pages/my-new-pages.js');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  await Promise.all([createMyNewPage(graphql, createPage)]);
};
```

#### Page modification

If the name of the content model is to be changed as mentioned in the gotcha [here](./09-debugging-and-gotchas.md##content-model-name-is-used-in-query) the page query will have to be updated.

#### New Component

:exclamation: Always follow [contentful conventions](./08-contentful.md)

After creating the new component content type in most cases this will also need to be added to a page template.

#### A Page template Query

At the bottom of every page template (`/src/templates`) there is a GraphQl query. The slug has been passed automatically from the `createPage` function. This allows us to query for the piece of content that will make up this page.

The result of that query is made available automatically as `data` props in the React component that is within the same file. :tada:

If the component is re-usable then a fragment should be made.

#### Create a fragment

We have a folder for fragments `src/fragments` there will be many examples here on the different uses. **Fragments can be used within fragments**
https://www.gatsbyjs.org/docs/querying-with-graphql/#fragments

To check where in the GraphQL query to query for the new component use the [GraphiQL IDE](./09-debugging-and-gotchas.md#graphiQL-ide) to see what schema is available.

#### Adding to a list of assemblies

The term assemblies, in this case, is just a multi-ref field in contentful that can link to different content types. The return value is an array of objects, with each object being the component content model added to that assembly.

We then loop through the returned array of assemblies to determine which React component to render for each content item in the assembly. Because of this we also need to query for an identifiable id on the component. **Each component fragment requires the type and id returned from the query** The following schema values are generated automatically and are required to be added to every component query.

```javascript
    id
    internal {
      type
    }
```

The array is then looped in the assemblies file (currently `src/assemblies/index`). If the type matches the id of the piece of content we are expecting then the React Component is called for that piece of content.
