module.exports = function(migration) {
  const redirect = migration
    .createContentType('redirect')
    .name('Redirect')
    .description('Create a redirect against a piece of content')
    .displayField('url');

  redirect
    .createField('url')
    .name('url')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([
      {
        unique: true,
      },
      {
        regexp: {
          pattern: '^\\/',
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  redirect
    .createField('redirectType')
    .name('Redirect Type')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([
      {
        in: ['301', '302'],
      },
    ])
    .disabled(false)
    .omitted(false);

  redirect.changeEditorInterface('url', 'singleLine', {
    helpText:
      'enter the slug you would like to redirect to this content eg /my-redirect-goes-here',
  });

  redirect.changeEditorInterface('redirectType', 'dropdown', {
    helpText: 'The type of redirect',
  });
};
