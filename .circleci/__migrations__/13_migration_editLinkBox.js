const linkField = require('../field-types/link');

module.exports = function(migration) {
  const deleteLink = migration
    .editContentType('topicLinkBox')
    .deleteField('links');

  const topicLinkBox = migration
    .editContentType('topicLinkBox')
    .createField('links')
    .name('links')
    .type('Array')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .items({
      type: 'Link',
      validations: [
        {
          linkContentType: [
            'pageAssemblyAdvicePage',
            'pageAssemblyChallengeEvent',
            'pageAssemblyContentPage',
          ],
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
