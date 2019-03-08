module.exports = function(migration) {
  const event = migration
    .editContentType('event')
    .deleteField('registrationLink');

  const eventField = migration
    .editContentType('event')
    .createField('externalLink')
    .name('External Link')
    .type('Link')
    .localized(false)
    .required(true)
    .validations([
      {
        linkContentType: ['topicExternalLink'],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType('Entry');
  const eventEditor = migration
    .editContentType('event')
    .changeEditorInterface('externalLink', 'entryLinkEditor', {
      helpText:
        'Note that if an internal and external link are supplied, the internal link will take priority',
    });
};
