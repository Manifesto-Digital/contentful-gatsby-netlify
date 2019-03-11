module.exports = function(migration) {
  const standardCta = migration
    .editContentType('standardCta')
    .deleteField('externalUrl');

  const standardCtaField = migration
    .editContentType('standardCta')
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

  const standardCtaEditor = migration
    .editContentType('standardCta')
    .changeEditorInterface('externalLink', 'entryLinkEditor', {
      helpText:
        'Note that if an internal and external link are supplied, the internal link will take priority',
    });
};
