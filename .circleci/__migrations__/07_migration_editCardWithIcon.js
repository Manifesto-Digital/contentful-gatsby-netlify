const linkField = require('../field-types/link');

module.exports = function(migration) {
  const topicCardWithIconDelete = migration
    .editContentType('topicCardWithIcon')
    .deleteField('ctaLink');

  const topicCardWithIcon = linkField(migration, 'topicCardWithIcon');

  const topicCardWithIconEditor = migration
    .editContentType('topicCardWithIcon')
    .changeEditorInterface('link', 'entryLinksEditor', {
      bulkEditing: false,
    });
};
