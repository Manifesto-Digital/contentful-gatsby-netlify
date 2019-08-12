module.exports = function(migration) {
  const pageAssemblyAdvicePage = migration.editContentType(
    'pageAssemblyAdvicePage'
  );

  pageAssemblyAdvicePage
    .editField('sidebarAssemblies')
    .name('Sidebar assemblies')
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
          linkContentType: [
            'assemblyContentCardsBanner',
            'assemblyCta',
            'topicBanner',
            'topicFullWidthImage',
            'topicInlineCallout',
            'simpleRichTextBlock',
          ],
        },
      ],

      linkType: 'Entry',
    });
};
