module.exports = function(migration) {
  const pageAssemblyLegalWhatsNewPage = migration
    .createContentType('pageAssemblyLegalWhatsNewPage')
    .name('Page Assembly - Legal Whats New Page')
    .description('')
    .displayField('title');
  pageAssemblyLegalWhatsNewPage
    .createField('title')
    .name('Title')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  pageAssemblyLegalWhatsNewPage
    .createField('introductoryText')
    .name('Introductory Text')
    .type('RichText')
    .localized(false)
    .required(false)
    .validations([
      {
        nodes: {},
      },
      {
        enabledMarks: [],
        message: 'Marks are not allowed',
      },
      {
        enabledNodeTypes: [
          'heading-1',
          'heading-2',
          'heading-3',
          'entry-hyperlink',
        ],
        message:
          'Only heading 1, heading 2, heading 3, and link to entry nodes are allowed',
      },
    ])
    .disabled(false)
    .omitted(false);

  pageAssemblyLegalWhatsNewPage
    .createField('featuredLegalPage')
    .name('Featured Legal Page')
    .type('Link')
    .localized(false)
    .required(false)
    .validations([
      {
        linkContentType: ['pageAssemblyLegalPage'],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType('Entry');

  pageAssemblyLegalWhatsNewPage
    .createField('pageInformation')
    .name('Page Information')
    .type('Link')
    .localized(false)
    .required(true)
    .validations([
      {
        linkContentType: ['topicPageMetaInformation'],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType('Entry');

  pageAssemblyLegalWhatsNewPage.changeEditorInterface('title', 'diff', {});
  pageAssemblyLegalWhatsNewPage.changeEditorInterface(
    'introductoryText',
    'richTextEditor',
    {}
  );
  pageAssemblyLegalWhatsNewPage.changeEditorInterface(
    'featuredLegalPage',
    'entryLinkEditor',
    {}
  );
  pageAssemblyLegalWhatsNewPage.changeEditorInterface(
    'pageInformation',
    'entryLinkEditor',
    {}
  );
};
