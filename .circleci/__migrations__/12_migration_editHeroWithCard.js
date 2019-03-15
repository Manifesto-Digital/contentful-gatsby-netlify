const linkField = require('../field-types/link');

module.exports = function(migration) {
  const heroWithCard = migration
    .editContentType('heroWithCard')
    .deleteField('externalUrl');

  const heroWithCardDeleteInternal = migration
    .editContentType('heroWithCard')
    .deleteField('internalLink');

  const heroWithCardField = linkField(migration, 'heroWithCard');

  const heroWithCardEditor = migration
    .editContentType('heroWithCard')
    .changeEditorInterface('link', 'entryLinksEditor', {
      bulkEditing: false,
    });
};
