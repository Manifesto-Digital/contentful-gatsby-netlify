module.exports = function(migration) {
  const topicLinkBoxField = migration
    .editContentType('topicLinkBox')
    .editField('links')
    .items({
      type: 'Link',
      validations: [
        {
          linkContentType: ['pageAssemblyContentPage', 'topicExternalLink'],
        },
      ],
      linkType: 'Entry',
    });
  const topicLinkBoxEditor = migration
    .editContentType('topicLinkBox')
    .changeEditorInterface('links', 'entryLinksEditor', {
      bulkEditing: false,
    });
};
