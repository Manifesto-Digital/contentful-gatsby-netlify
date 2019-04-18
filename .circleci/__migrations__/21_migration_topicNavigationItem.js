module.exports = function(migration) {
  const topicNavigationItem = migration.editContentType('topicNavigationItem');

  topicNavigationItem.deleteField('subNavigationItems');

  topicNavigationItem
    .createField('childNavigationItems')
    .name('Sub Navigation Items')
    .type('Array')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .items({
      type: 'Link',

      validations: [
        {
          linkContentType: ['topicNavigationItem'],
        },
      ],

      linkType: 'Entry',
    });

  topicNavigationItem.changeEditorInterface(
    'childNavigationItems',
    'entryLinksEditor',
    {
      bulkEditing: false,
    }
  );
};
