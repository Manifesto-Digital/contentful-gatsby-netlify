# Debugging and gotchas

- [Debugging and gotchas](#debugging-and-gotchas)
  - [Common Debugging](#common-debugging)
    - [GraphiQL IDE](#graphiql-ide)
  - [Gotchas](#gotchas)
    - [Single ref field with multiple types](#single-ref-field-with-multiple-types)
    - [Entity doesn't exist then query fails](#entity-doesnt-exist-then-query-fails)
    - [Content model name is used in query](#content-model-name-is-used-in-query)

## Common Debugging

### GraphiQL IDE

GraphiQL is the GraphQL integrated development environment (IDE). It’s a powerful (and all-around awesome) tool you’ll use often while building Gatsby websites.

You can access it when your site’s development server is running at http://localhost:8000/___graphql.

https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql

:bulb: Use `Ctrl + Enter` for autocomplete to see what fields are available

### Max callstack size exceeded
Very likely to be an infinite loop [Linking to content via Rich Text](#linking-to-content-via-rich-text)

### Cannot query field X on type X
This means that the field you are querying for does not exist on the schema.

If you are confident that the content type exists in contentful with the correct ID used in the query, possible cause could be [Entity doesn't exist then query fails](#entity-doesnt-exist-then-query-fails)

If this is a page query type then potentially the name of the content has changed [Content model name is used in query](#content-model-name-is-used-in-query)

## Gotchas

### Linking to content via Rich Text
When linking to content inside Rich text this creates a reference to that piece of content. During `gatsby-source-contentful` schema generation this is attempted to be parsed. The large issue is that every field on the referenced piece of content is available and is not restricted on depth.

This makes an endless loop extremely likely. Here is an example small example.

**Content A** references **Content B**
**Content B** has a CTA reference that links to **Content C**
**Content C** has a CTA reference that links to **Content A**

The temporary solution is to create a patch for `gatsby-source-contentful` as seen in the `src/patches`.

Whenever an `entry-hyperlink` is used in the rich text we mutate the referenced content to only have a `slug` field. This prevents the above ever occurring.

Related issue: https://github.com/gatsbyjs/gatsby/issues/11364#issuecomment-462038897

### Embedding entries inside Rich Text
The problem with linking content still exists here. If the embedded component contains any references to other content then we have to also mutate that link.

Again there is a temporary solution with a patch for `gatsby-source-contentful` as seen in the `src/patches`.

### Single ref field with multiple types

Only use single reference field if you are positive that there will only be one content model referenced this has to also be limited in the validations.

https://github.com/gatsbyjs/gatsby/issues/3535

The problem is an object is returned, as fields vary on different content models (even if they have same id) then this is no longer queryable and we cannot use fragments as there is not a `type` to query on.

The solution is to use a multi reference field with multiple content types allowed in the validations. If you require a single item to be referenced then this can also be restricted in the validation to a max of 1. The first item

### Entity doesn't exist then query fails

Gatsby source contentful generates the schema based on content available. This means that there has to be at least one piece of content for each content model with each field having a value for that field to be queryable! :exclamation:

https://github.com/gatsbyjs/gatsby/pull/2037
https://github.com/gatsbyjs/gatsby/issues/3344 - looks to be latest

Gatsby has very recently announced a schema generation API, which is a promising avenue to overcome this issue.
https://www.gatsbyjs.org/blog/2019-03-18-releasing-new-schema-customization/

### Content model name is used in query

This is used in the graphQL fragment query, changing this will break build without the GraphQL queries being updated in a migration. https://github.com/gatsbyjs/gatsby/issues/9568
