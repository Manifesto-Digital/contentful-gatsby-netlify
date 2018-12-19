// We define some factories for creating the various types of objects in our system.
// These are just functions that take `Partial<T>` and return `T`, assigning defaults to
// the properties that aren't specified.

export const createFactory = defaults => properties => ({
  ...defaults,
  ...properties,
})

export const createInternalLink = createFactory({
  id: 'ee6c2ca6-54d8-5c26-bbff-7dafdaa823e3',
  slug: 'internal-link-slug',
})

export const createImage = createFactory({
  id: 'ca8e4a9c-9491-5257-8e53-d3d74ae204a5',
  description: 'Collection hero',
  title: 'collection-hero',
  file: {
    url:
      '//images.ctfassets.net/6sxvmndnpn0s/2DPKnmx9Na8WYgG4ySqkA/5ca89770eb1ac36c9dbfe34d8d65eb5c/collection-hero.jpg',
    fileName: 'collection-hero.jpg',
    contentType: 'image/jpeg',
  },
})

export const createChildContentfulRichText = createFactory({
  childContentfulRichText: {
    html:
      '<p>Our advice and support services across the UK give people <b>one-to-one</p>',
  },
})
