module.exports = function(migration) {
  const deleteLink = migration
    .editContentType('pageAssemblyStandardEvent')
    .deleteField('mainCtaLink');

  const standardEventInfo = migration
    .editContentType('pageAssemblyStandardEvent')
    .changeEditorInterface('mainCtaMethod', 'dropdown', {
      helpText: 'If URL chosen then link is taken from the event',
    });
};
