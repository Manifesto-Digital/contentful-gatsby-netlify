module.exports = function(migration) {
  const topicCtaWithIcon = migration
    .editContentType('topicCtaWithIcon')
    .deleteField('externalUrl');

  const topicCtaWithIconFields = migration
    .editContentType('topicCtaWithIcon')
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

  const topicCtaWithIconEditor = migration
    .editContentType('topicCtaWithIcon')
    .changeEditorInterface('externalLink', 'entryLinkEditor', {
      helpText:
        'Note that if an internal and external link are supplied, the internal link will take priority',
    });
};
