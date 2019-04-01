module.exports = function(migration) {
  const pageAssemblyLegalLandingPage = migration.editContentType(
    'pageAssemblyLegalLandingPage'
  );

  pageAssemblyLegalLandingPage
    .createField('menuParent')
    .name('Menu Parent')
    .type('Object')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(true);

  pageAssemblyLegalLandingPage
    .createField('applicableRegions')
    .name('Applicable Regions')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([
      {
        in: [
          'England',
          'Scotland',
          'Wales',
          'England & Scotland',
          'Scotland & Wales',
          'England & Wales',
          'England, Scotland & Wales',
        ],
      },
    ])
    .disabled(false)
    .omitted(false);

  pageAssemblyLegalLandingPage.changeEditorInterface(
    'applicableRegions',
    'dropdown',
    {}
  );

  pageAssemblyLegalLandingPage.changeEditorInterface(
    'menuParent',
    '4JC2mo4dbGOVCsemqJ9EOE',
    {}
  );
};
