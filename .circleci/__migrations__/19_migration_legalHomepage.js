module.exports = function(migration) {
  const pageAssemblyLegalHomepage = migration
    .createContentType('pageAssemblyLegalHomepage')
    .name('Page Assembly - Legal Homepage')
    .description('')
    .displayField('title');
  pageAssemblyLegalHomepage
    .createField('title')
    .name('Title')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  pageAssemblyLegalHomepage
    .createField('slug')
    .name('Slug')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  pageAssemblyLegalHomepage
    .createField('hero')
    .name('Hero')
    .type('Link')
    .localized(false)
    .required(true)
    .validations([
      {
        linkContentType: ['heroWithCard'],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType('Entry');

  pageAssemblyLegalHomepage
    .createField('pages')
    .name('Pages')
    .type('Array')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false)
    .items({
      type: 'Link',

      validations: [
        {
          linkContentType: [
            'pageAssemblyLegalLandingPage',
            'pageAssemblyLegalPage',
          ],
        },
      ],

      linkType: 'Entry',
    });

  pageAssemblyLegalHomepage
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

  pageAssemblyLegalHomepage.changeEditorInterface('title', 'singleLine', {});
  pageAssemblyLegalHomepage.changeEditorInterface('slug', 'slugEditor', {});
  pageAssemblyLegalHomepage.changeEditorInterface(
    'hero',
    'entryLinkEditor',
    {}
  );

  pageAssemblyLegalHomepage.changeEditorInterface('pages', 'entryLinksEditor', {
    bulkEditing: false,
  });

  pageAssemblyLegalHomepage.changeEditorInterface(
    'pageInformation',
    'entryLinkEditor',
    {}
  );
};
