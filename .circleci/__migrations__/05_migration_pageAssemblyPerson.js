module.exports = function(migration) {
  const pageAssemblyPerson = migration
    .createContentType('pageAssemblyPerson')
    .name('Page Assembly - Person ')
    .description('')
    .displayField('title');
  pageAssemblyPerson
    .createField('title')
    .name('Page Title')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  pageAssemblyPerson
    .createField('slug')
    .name('Slug')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  pageAssemblyPerson
    .createField('person')
    .name('Person')
    .type('Link')
    .localized(false)
    .required(true)
    .validations([
      {
        linkContentType: ['topicPerson'],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType('Entry');

  pageAssemblyPerson
    .createField('quotation')
    .name('Quotation')
    .type('Text')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  pageAssemblyPerson
    .createField('assemblies')
    .name('Assemblies')
    .type('Array')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .items({
      type: 'Link',

      validations: [
        {
          linkContentType: [
            'assemblyCta',
            'assemblyDownloadBanner',
            'topicAdviceSearchBox',
            'topicBanner',
            'topicContentGrid',
            'topicCtaWithIcon',
            'topicInlineAdviceTool',
            'topicInlineCallout',
            'topicLinkBox',
            'topicRelatedAdvice',
            'topicShareBlock',
            'topicVideoEmbed',
          ],
        },
      ],

      linkType: 'Entry',
    });

  pageAssemblyPerson
    .createField('pageInformation')
    .name('Page Metadata')
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

  pageAssemblyPerson.changeEditorInterface('title', 'diff', {});

  pageAssemblyPerson.changeEditorInterface('slug', 'slugEditor', {
    helpText: 'This will appear in the URL',
  });

  pageAssemblyPerson.changeEditorInterface('person', 'entryLinkEditor', {});
  pageAssemblyPerson.changeEditorInterface('quotation', 'multipleLine', {});

  pageAssemblyPerson.changeEditorInterface('assemblies', 'entryLinksEditor', {
    bulkEditing: false,
  });

  pageAssemblyPerson.changeEditorInterface(
    'pageInformation',
    'entryLinkEditor',
    {}
  );
};
