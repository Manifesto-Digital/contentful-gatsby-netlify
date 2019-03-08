module.exports = function(migration) {
  const topicExternalLink = migration.editContentType('topicExternalLink');

  topicExternalLink
    .createField('title')
    .name('Title')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
};
