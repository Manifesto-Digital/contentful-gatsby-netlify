module.exports = function(migration) {
  const pageContent = migration.editContentType('pageContent');
  pageContent
    .createField('redirectsPageContent')
    .name('Redirects')
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
          linkContentType: ['redirect'],
        },
      ],

      linkType: 'Entry',
    });
};
