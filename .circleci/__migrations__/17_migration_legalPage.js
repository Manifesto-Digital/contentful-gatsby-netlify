module.exports = function(migration) {
  const pageAssemblyLegalPage = migration.editContentType(
    'pageAssemblyLegalPage'
  );

  pageAssemblyLegalPage
    .createField('legislations')
    .name('Legislations')
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
          linkContentType: ['pageAssemblyLegalPage'],
        },
      ],

      linkType: 'Entry',
    });

  pageAssemblyLegalPage
    .createField('essentialLinks')
    .name('Essential Links')
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
          linkContentType: ['pageAssemblyLegalPage', 'topicExternalLink'],
        },
      ],

      linkType: 'Entry',
    });

  pageAssemblyLegalPage
    .createField('downloads')
    .name('Downloads')
    .type('Link')
    .localized(false)
    .required(false)
    .validations([
      {
        linkContentType: ['topicDownloads'],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType('Entry');

  pageAssemblyLegalPage
    .createField('lastAmended')
    .name('Last Amended')
    .type('Date')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  pageAssemblyLegalPage
    .createField('lastAmendedSummary')
    .name('Last Amended Summary')
    .type('Text')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  pageAssemblyLegalPage.changeEditorInterface(
    'legislations',
    'entryLinksEditor',
    {
      bulkEditing: false,
    }
  );

  pageAssemblyLegalPage.changeEditorInterface(
    'essentialLinks',
    'entryLinksEditor',
    {
      bulkEditing: false,
    }
  );

  pageAssemblyLegalPage.changeEditorInterface(
    'downloads',
    'entryLinkEditor',
    {}
  );

  pageAssemblyLegalPage.changeEditorInterface('lastAmended', 'datePicker', {
    ampm: '24',
    format: 'timeZ',
    helpText: 'Also use on first publish',
  });

  pageAssemblyLegalPage.changeEditorInterface(
    'lastAmendedSummary',
    'multipleLine',
    {
      helpText: "Used on the what's new page, also use on first publish",
    }
  );
};
