const linkField = require('../field-types/link');

module.exports = function(migration) {
  const topicBanner = migration
    .editContentType('topicBanner')
    .deleteField('externalUrl');

  const topicBannerDeleteInternal = migration
    .editContentType('topicBanner')
    .deleteField('internalLink');

  const topicBannerField = linkField(migration, 'topicBanner');

  const topicBannerFieldEditor = migration
    .editContentType('topicBanner')
    .changeEditorInterface('link', 'entryLinksEditor', {
      bulkEditing: false,
    });
};
