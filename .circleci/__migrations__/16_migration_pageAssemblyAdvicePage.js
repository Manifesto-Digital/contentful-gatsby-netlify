module.exports = function(migration) {
  const advicePage = migration.editContentType('pageAssemblyAdvicePage');

  advicePage
    .createField('displayBounceCard')
    .name('Display Scotland only widget?')
    .type('Boolean')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  advicePage.moveField('displayBounceCard').beforeField('sidebarAssemblies');
};
