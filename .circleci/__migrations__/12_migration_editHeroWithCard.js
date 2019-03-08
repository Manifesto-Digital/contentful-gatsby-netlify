module.exports = function(migration) {
  const heroWithCard = migration
    .editContentType('heroWithCard')
    .deleteField('externalUrl');

  const heroWithCardField = migration
    .editContentType('heroWithCard')
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
  const heroWithCardEditor = migration
    .editContentType('heroWithCard')
    .changeEditorInterface('externalLink', 'entryLinkEditor', {
      helpText:
        'Note that if an internal and external link are supplied, the internal link will take priority',
    });
};
