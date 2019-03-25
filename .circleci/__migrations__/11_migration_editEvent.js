const linkField = require('../field-types/link');

module.exports = function(migration) {
  const event = migration
    .editContentType('event')
    .deleteField('registrationLink');

  const eventEditorLink = linkField(
    migration,
    'event',
    true,
    'Registration Link'
  );

  const eventEditor = migration
    .editContentType('event')
    .changeEditorInterface('link', 'entryLinksEditor', {
      bulkEditing: false,
    });
};
