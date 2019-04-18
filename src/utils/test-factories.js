// We define some factories for creating the various types of objects in our system.
// These are just functions that take `Partial<T>` and return `T`, assigning defaults to
// the properties that aren't specified.

export const createFactory = defaults => properties => ({
  ...defaults,
  ...properties,
});

export const createInternalLink = createFactory({
  id: 'ee6c2ca6-54d8-5c26-bbff-7dafdaa823e3',
  title: 'Test Page Title',
  slug: 'internal-link-slug',
});

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
});

export const createVideo = createFactory({
  id: 'ca8e4a9c-9491-5257-8e53-d3d74ae204a5',
  title: 'Urban Rush hero',
  description: 'Urban rush video',
  file: {
    url:
      '//videos.ctfassets.net/6sxvmndnpn0s/5hlfsk9dwVVNBlbpWHSLvK/9f1d647e6332be389465c9d014a57a26/shelter-urban-rush.mp4',
    fileName: 'shelter-urban-rush.mp4',
    contentType: 'video/mp4',
  },
});

export const createChildContentfulRichText = createFactory({
  childContentfulRichText: {
    html:
      '<p>Our advice and support services across the UK give people <b>one-to-one</p>',
  },
});

export const createFile = createFactory({
  description: 'Mock file description',
  title: 'Mock file title',
  file: {
    contentType: 'application/pdf',
    url:
      '//assets.ctfassets.net/6sxvmndnpn0s/6gDmPHZ04gCMMS4sOa0IEk/7c712c5e8e383bbafd61f2d9d570de4f/component_tree-pdf.pdf',
    fileName: 'component tree-pdf.pdf',
    details: {
      size: 78019,
      image: null,
    },
  },
});

export const createHeaderNavigation = createFactory({
  id: 'e230d8b8-4ee6-5d4c-bf25-57af664d12d7',
  name: 'Assembly - Primary Navigation',
  navigationItems: [
    {
      id: 'd582da1f-1f7f-5f4c-ae3b-ef2b41972dbc',
      menuLabel: 'Housing Advice',
      navigationLink: [
        {
          title: 'Test Page ',
          slug: 'test-page',
        },
      ],
      childNavigationItems: [
        {
          menuLabel: 'Benefits',
          navigationLink: [
            {
              slug: 'sprint-7-legal-page-demo',
              title: 'Sprint 7 Legal Page',

              pageInformation: {
                shortDescription: {
                  shortDescription:
                    'Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. In turpis. short desc',
                },
              },
            },
          ],
        },
      ],
    },
    {
      id: 'a23040f0-c44c-5943-99c9-3f840e1ad010',
      menuLabel: 'What we do',
      navigationLink: [
        {
          title: 'Test Page ',
          slug: 'test-page',
        },
      ],
      childNavigationItems: null,
    },
  ],
  additionalLink: [
    {
      id: '69b77113-d569-54ac-9554-cadc56dcbf1d',
      title: 'Test Page',
      slug: 'test-page',
    },
  ],
  footerText: createChildContentfulRichText(),
});

export const createSubpage = createFactory({
  id: '27757b6a-db0e-5aca-8db2-8f3e736b5341',
  slug: 'advice-guide-test',
  title: 'Advice guide test',
  subPages: null,
});

export const createContentCards = createFactory({
  pageInformation: {
    pageThumbnail: {
      description: 'Telli Afrik and family',
      file: {
        url:
          '//images.ctfassets.net/6sxvmndnpn0s/3lzXpdUbIjH5rj…bf633ef/Telli_Afrik_and_family_-_Steve_Franck.jpg',
        fileName: 'Telli Afrik and family - Steve Franck.jpg',
      },
    },
    shortDescription: {
      shortDescription: 'A short description for Callams test page',
    },
  },
  slug: 'shelter-demo-page',
  title: 'Shelter Demo Page',
});

export const createContentCardBanner = createFactory({
  header: createChildContentfulRichText(),
  bannerColour: 'Grey',
  bannerFlow: 'Horizontal',
  contentCards: [createContentCards(), createContentCards()],
});

export const createTestRef = createFactory({
  current: {},
});

export const createEvent = createFactory({
  eventName: 'Brighton Half Marathon',
  shortDescription:
    'Run for charity with Team Shelter; half marathons, marathons and other distance running events all in the name of a good cause.',
  thumbnailImage: createImage(),
  eventType: 'Run',
  eventStatus: 'Sold Out',
  eventSystemDate: '2019-02-24',
  eventDisplayDate: '24 February 2019',
  distance: '13.1 miles',
  registrationFee: 19,
  pledge: 199,
  eventLocation: {
    lat: 50.8374204,
    lon: -0.1061897,
  },
  displayLocation: 'Brighton',
  notifiedTeamEmail: 'running@shelter.org.uk',
});

export const createPerson = createFactory({
  id: 'd5ec5ab5-6824-5488-b9bc-4d8794fba4c6',
  firstName: 'Test',
  lastName: 'Person',
  phoneNumber: '012345678910',
  emailAddress: 'test@test.com',
  photo: createImage(),
  bio: {
    internal: {
      content:
        'Nunc nonummy metus. Fusce pharetra convallis urna. Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus.',
    },
  },
  jobTitle: 'Developer',
});

export const createInternalRef = createFactory({
  internal: {
    type: 'ContentfulPageContent',
  },
  slug: 'internal-link-slug',
});

export const createExternalRef = createFactory({
  internal: {
    type: 'ContentfulComponentExternalLink',
  },
  URL: 'http://mock.com',
  newTab: false,
});
