module.exports = function(migration) {
  const topicBanner = migration
    .editContentType('topicBanner')
    .deleteField('externalUrl');

  const topicBannerField = migration
    .editContentType('topicBanner')
    .createField('externalLink')
    .name('External Link')
    .type('Link')
    .localized(false)
    .required(false)
    .validations([
      {
        linkContentType: ['topicExternalLink'],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType('Entry');
  const topicBannerEditor = migration
    .editContentType('topicBanner')
    .changeEditorInterface('externalUrl', 'urlEditor', {
      helpText:
        'Note that if an internal and external link are supplied, the internal link will take priority',
    });
};
