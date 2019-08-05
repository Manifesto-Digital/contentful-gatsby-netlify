module.exports = function(migration) {
  const assemblyCta = migration.editContentType('assemblyCta');

  assemblyCta
    .editField('bannerColour')
    .name('Banner colour')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([
      {
        in: ['Red', 'Black', 'San Marino Blue', 'Transparent'],
      },
    ])
    .disabled(false)
    .omitted(false);
};
