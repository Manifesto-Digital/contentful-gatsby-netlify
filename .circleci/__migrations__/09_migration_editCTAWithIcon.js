const linkField = require('../field-types/link');

module.exports = function(migration) {
  const topicCtaWithIcon = migration
    .editContentType('topicCtaWithIcon')
    .deleteField('externalUrl');

  const topicCtaWithIconDeleteInternal = migration
    .editContentType('topicCtaWithIcon')
    .deleteField('internalLink');

  const topicCtaWithIconFields = linkField(migration, 'topicCtaWithIcon');

  const topicCtaWithIconEditor = migration
    .editContentType('topicCtaWithIcon')
    .changeEditorInterface('link', 'entryLinksEditor', {
      bulkEditing: false,
    });
};
