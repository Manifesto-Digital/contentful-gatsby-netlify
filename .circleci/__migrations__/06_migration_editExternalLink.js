module.exports = function(migration) {
  const topicExternalLink = migration
    .editContentType('topicExternalLink')
    .createField('title')
    .name('Title')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  const topicExternalLinkField = migration.editContentType('topicExternalLink');
  topicExternalLinkField.changeEditorInterface('URL', 'urlEditor', {
    helpText:
      'Note that if an internal and external link are supplied, the internal link will take priority',
  });
};
