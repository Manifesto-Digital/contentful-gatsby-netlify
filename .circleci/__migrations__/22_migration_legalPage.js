module.exports = function(migration) {
  const pageAssemblyLegalPage = migration.editContentType(
    'pageAssemblyLegalPage'
  );

  pageAssemblyLegalPage.deleteField('parentSlug');

  pageAssemblyLegalPage
    .createField('menuParent')
    .name('Parent Slug')
    .type('Object')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  pageAssemblyLegalPage.changeEditorInterface(
    'menuParent',
    '4JC2mo4dbGOVCsemqJ9EOE',
    {}
  );
};
