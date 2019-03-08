module.exports = function(migration) {
  const topicCardWithIcon = migration
    .editContentType('topicCardWithIcon')
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

  const topicCardWithIconEditor = migration
    .editContentType('topicCardWithIcon')
    .changeEditorInterface('externalLink', 'entryLinkEditor', {
      helpText:
        'Note that if an internal and external link are supplied, the internal link will take priority',
    });
};
