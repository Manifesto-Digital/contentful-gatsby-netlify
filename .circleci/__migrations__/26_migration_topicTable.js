module.exports = function(migration) {
  const topicTable = migration
    .createContentType('topicTable')
    .name('Component - Table')
    .description('HTML table used for tabular data')
    .displayField('name');
  topicTable
    .createField('name')
    .name('Name (administrative)')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  topicTable
    .createField('tableHeader')
    .name('Header')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  topicTable
    .createField('table')
    .name('Table')
    .type('Object')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  topicTable.changeEditorInterface('name', 'singleLine', {});
  topicTable.changeEditorInterface('tableHeader', 'singleLine', {});
  topicTable.changeEditorInterface('table', '6x0ZoE0vImvGxzUp1CTgVY', {});

  // Add to Press release assemblies and richtext
  const pageAssemblyPressReleasePage = migration.editContentType(
    'pageAssemblyPressReleasePage'
  );
  pageAssemblyPressReleasePage.editField('bodyCopy').validations([
    {
      nodes: {
        'entry-hyperlink': [
          {
            linkContentType: [
              'topicExternalLink',
              'pageAssemblyAdvicePage',
              'pageAssemblyChallengeEvent',
              'pageAssemblyContentPage',
              'pageAssemblyEventCategory',
              'pageAssemblyEventsLandingPage',
              'pageAssemblyFurnitureShopPage',
              'pageAssemblyLegalPage',
              'pageAssemblyLegalHomepage',
              'pageAssemblyLegalLandingPage',
              'pageAssemblyLegalWhatsNewPage',
              'pageAssemblyPerson',
              'pageAssemblyPolicyPage',
              'pageAssemblyPressReleasePage',
              'pageAssemblyPressReleaseListingsPage',
              'pageAssemblyServicePage',
              'pageAssemblyShopPage',
              'pageAssemblyStandardEvent',
            ],
          },
        ],

        'embedded-entry-block': [
          {
            linkContentType: [
              'assemblyCta',
              'assemblyDownloadBanner',
              'topicAdviceSearchBox',
              'topicGoogleMap',
              'topicInlineCallout',
              'topicTable',
              'topicVideoEmbed',
            ],
          },
        ],

        'embedded-entry-inline': [
          {
            linkContentType: [
              'assemblyCta',
              'assemblyDownloadBanner',
              'topicAdviceSearchBox',
              'topicGoogleMap',
              'topicInlineCallout',
              'topicVideoEmbed',
            ],
          },
        ],
      },
    },
    {
      enabledMarks: ['bold', 'italic', 'underline'],
      message: 'Only bold, italic, and underline marks are allowed',
    },
    {
      enabledNodeTypes: [
        'heading-2',
        'heading-3',
        'ordered-list',
        'unordered-list',
        'hr',
        'blockquote',
        'entry-hyperlink',
        'embedded-asset-block',
        'embedded-entry-block',
        'hyperlink',
      ],

      message:
        'Only heading 2, heading 3, ordered list, unordered list, horizontal rule, quote, link to entry, asset, block entry, and link to Url nodes are allowed',
    },
  ]);

  pageAssemblyPressReleasePage.editField('assemblies').items({
    type: 'Link',

    validations: [
      {
        linkContentType: [
          'assemblyCta',
          'assemblyPersonCollection',
          'topicFullWidthImage',
          'topicShareBlock',
          'topicTable',
        ],
      },
    ],

    linkType: 'Entry',
  });

  // Advice page assemblies and richtext
  const pageAssemblyAdvicePage = migration.editContentType(
    'pageAssemblyAdvicePage'
  );
  pageAssemblyAdvicePage.editField('assemblies').items({
    type: 'Link',

    validations: [
      {
        linkContentType: [
          'assemblyCardsWithIcon',
          'assemblyContentCardsBanner',
          'assemblyCta',
          'assemblyDownloadBanner',
          'assemblyForm',
          'topicAdviceSearchBox',
          'topicContentGrid',
          'topicInlineAdviceTool',
          'topicInlineCallout',
          'topicLinkBox',
          'topicRelatedAdvice',
          'topicShareBlock',
          'topicTable',
          'topicTwoColumnTextAndImageBlock',
          'topicVideoEmbed',
        ],
      },
    ],
    linkType: 'Entry',
  });

  pageAssemblyAdvicePage.editField('bodyCopy').validations([
    {
      nodes: {
        'entry-hyperlink': [
          {
            linkContentType: [
              'topicExternalLink',
              'pageAssemblyAdvicePage',
              'pageAssemblyChallengeEvent',
              'pageAssemblyContentPage',
              'pageAssemblyEventCategory',
              'pageAssemblyEventsLandingPage',
              'pageAssemblyFurnitureShopPage',
              'pageAssemblyLegalPage',
              'pageAssemblyLegalHomepage',
              'pageAssemblyLegalLandingPage',
              'pageAssemblyLegalWhatsNewPage',
              'pageAssemblyPerson',
              'pageAssemblyPolicyPage',
              'pageAssemblyPressReleasePage',
              'pageAssemblyPressReleaseListingsPage',
              'pageAssemblyServicePage',
              'pageAssemblyShopPage',
              'pageAssemblyStandardEvent',
            ],
          },
        ],

        'embedded-entry-block': [
          {
            linkContentType: [
              'assemblyCta',
              'assemblyDownloadBanner',
              'topicAdviceSearchBox',
              'topicDonationBanner',
              'topicGoogleMap',
              'topicInlineCallout',
              'topicTable',
              'topicVideoEmbed',
            ],
          },
        ],

        'embedded-entry-inline': [
          {
            linkContentType: [
              'assemblyCta',
              'assemblyDownloadBanner',
              'topicAdviceSearchBox',
              'topicDonationBanner',
              'topicGoogleMap',
              'topicInlineCallout',
              'topicVideoEmbed',
            ],
          },
        ],
      },
    },
    {
      enabledMarks: ['bold', 'italic', 'underline'],
      message: 'Only bold, italic, and underline marks are allowed',
    },
    {
      enabledNodeTypes: [
        'heading-1',
        'heading-2',
        'heading-3',
        'ordered-list',
        'unordered-list',
        'hr',
        'blockquote',
        'entry-hyperlink',
        'embedded-asset-block',
        'heading-4',
        'embedded-entry-block',
      ],

      message:
        'Only heading 1, heading 2, heading 3, ordered list, unordered list, horizontal rule, quote, link to entry, asset, heading 4, and block entry nodes are allowed',
    },
  ]);

  // Add to content page assemblies and richtext
  const pageAssemblyContentPage = migration.editContentType(
    'pageAssemblyContentPage'
  );

  pageAssemblyContentPage.editField('assemblies').items({
    type: 'Link',

    validations: [
      {
        linkContentType: [
          'assemblyAccordions',
          'assemblyCardsWithIcon',
          'assemblyContentCardsBanner',
          'assemblyCta',
          'assemblyDownloadBanner',
          'assemblyForm',
          'assemblyPersonCollection',
          'topicTestimonials',
          'topicAdviceSearchBox',
          'topicBanner',
          'challengeEventPerksList',
          'topicContentGrid',
          'topicCtaWithIcon',
          'topicDonationBanner',
          'topicDonationHero',
          'topicFullWidthImage',
          'topicGoogleMap',
          'topicInlineCallout',
          'topicLinkBox',
          'topicRelatedAdvice',
          'topicServicesFinder',
          'topicShareBlock',
          'topicShopFinder',
          'simpleRichTextBlock',
          'standardCta',
          'topicStats',
          'topicTableOfContents',
          'topicTwoColumnTextAndImageBlock',
          'topicVideoEmbed',
        ],
      },
    ],

    linkType: 'Entry',
  });

  pageAssemblyContentPage.editField('bodyCopy').validations([
    {
      nodes: {
        'entry-hyperlink': [
          {
            linkContentType: [
              'topicExternalLink',
              'pageAssemblyAdvicePage',
              'pageAssemblyChallengeEvent',
              'pageAssemblyContentPage',
              'pageAssemblyEventCategory',
              'pageAssemblyEventsLandingPage',
              'pageAssemblyFurnitureShopPage',
              'pageAssemblyLegalPage',
              'pageAssemblyLegalHomepage',
              'pageAssemblyLegalLandingPage',
              'pageAssemblyLegalWhatsNewPage',
              'pageAssemblyPerson',
              'pageAssemblyPolicyPage',
              'pageAssemblyPressReleasePage',
              'pageAssemblyPressReleaseListingsPage',
              'pageAssemblyServicePage',
              'pageAssemblyShopPage',
              'pageAssemblyStandardEvent',
            ],
          },
        ],

        'embedded-entry-block': [
          {
            linkContentType: [
              'assemblyAccordions',
              'assemblyCta',
              'assemblyDownloadBanner',
              'topicGoogleMap',
              'topicInlineCallout',
              'topicTable',
              'topicVideoEmbed',
            ],
          },
        ],

        'embedded-entry-inline': [
          {
            linkContentType: [
              'assemblyCta',
              'assemblyDownloadBanner',
              'topicAdviceSearchBox',
              'topicGoogleMap',
              'topicInlineCallout',
              'topicVideoEmbed',
            ],
          },
        ],
      },
    },
    {
      enabledMarks: ['bold', 'italic', 'underline'],
      message: 'Only bold, italic, and underline marks are allowed',
    },
    {
      enabledNodeTypes: [
        'heading-1',
        'heading-2',
        'heading-3',
        'heading-4',
        'ordered-list',
        'unordered-list',
        'embedded-asset-block',
        'blockquote',
        'entry-hyperlink',
        'hr',
        'embedded-entry-block',
        'hyperlink',
      ],

      message:
        'Only heading 1, heading 2, heading 3, heading 4, ordered list, unordered list, asset, quote, link to entry, horizontal rule, block entry, and link to Url nodes are allowed',
    },
  ]);

  // Add to legal page richtext
  const pageAssemblyLegalPage = migration.editContentType(
    'pageAssemblyLegalPage'
  );
  pageAssemblyLegalPage.editField('bodyCopy').validations([
    {
      nodes: {
        'entry-hyperlink': [
          {
            linkContentType: [
              'topicExternalLink',
              'pageAssemblyAdvicePage',
              'pageAssemblyChallengeEvent',
              'pageAssemblyContentPage',
              'pageAssemblyEventCategory',
              'pageAssemblyEventsLandingPage',
              'pageAssemblyFurnitureShopPage',
              'pageAssemblyLegalPage',
              'pageAssemblyLegalHomepage',
              'pageAssemblyLegalLandingPage',
              'pageAssemblyLegalWhatsNewPage',
              'pageAssemblyPerson',
              'pageAssemblyPolicyPage',
              'pageAssemblyPressReleasePage',
              'pageAssemblyPressReleaseListingsPage',
              'pageAssemblyServicePage',
              'pageAssemblyShopPage',
              'pageAssemblyStandardEvent',
            ],
          },
        ],

        'embedded-entry-block': [
          {
            linkContentType: ['topicTable'],
          },
        ],
      },
    },
    {
      enabledMarks: ['bold', 'underline', 'italic'],
      message: 'Only bold, underline, and italic marks are allowed',
    },
    {
      enabledNodeTypes: [
        'heading-2',
        'embedded-asset-block',
        'unordered-list',
        'ordered-list',
        'entry-hyperlink',
        'embedded-entry-block',
      ],

      message:
        'Only heading 2, asset, unordered list, ordered list, link to entry, and block entry nodes are allowed',
    },
  ]);
};
