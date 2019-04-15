module.exports = function(migration) {
  const externalLink = migration.editContentType('topicExternalLink');
  externalLink
    .createField('title')
    .name('Title')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  externalLink.deleteField('openInNewWindow');
  externalLink
    .createField('newTab')
    .name('Open In New Window?')
    .type('Boolean')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  externalLink.deleteField('externalLink');
  externalLink
    .createField('URL')
    .name('External Link')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([
      {
        regexp: {
          pattern:
            '^(ftp|http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-\\/]))?$',
        },

        message: 'This field required a URL',
      },
    ])
    .disabled(false)
    .omitted(false);
};
