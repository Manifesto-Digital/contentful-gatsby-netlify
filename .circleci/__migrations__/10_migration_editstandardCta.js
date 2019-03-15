const linkField = require('../field-types/link');

module.exports = function(migration) {
  const standardCta = migration
    .editContentType('standardCta')
    .deleteField('externalUrl');

  const standardCtaDeleteInternal = migration
    .editContentType('standardCta')
    .deleteField('internalLink');

  const standardCtaEditorCreateLink = linkField(migration, 'standardCta');

  const standardCtaEditor = migration
    .editContentType('standardCta')
    .changeEditorInterface('link', 'entryLinksEditor', {
      bulkEditing: false,
    });
};
