module.exports = function(migration) {
  const pageAssemblyContentPage = migration.editContentType(
    'pageAssemblyContentPage'
  );
  pageAssemblyContentPage
    .createField('redirectsPageAssemblyContentPage')
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
