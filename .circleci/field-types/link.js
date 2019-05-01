module.exports = function(
  migration,
  contentModel,
  required = false,
  fieldName = 'Link'
) {
  migration
    .editContentType(contentModel)
    .createField('link')
    .name(fieldName)
    .type('Array')
    .localized(false)
    .required(required)
    .disabled(false)
    .validations([
      {
        size: {
          max: 1,
        },
      },
    ])
    .omitted(false)
    .items({
      type: 'Link',
      validations: [
        {
          linkContentType: [
            'pageAssemblyAdvicePage',
            'pageAssemblyChallengeEvent',
            'pageContent',
            'pageEventCategory',
            'pageEventsLanding',
            'pageFurnitureShop',
            'pageAssemblyLegalLandingPage',
            'pageAssemblyLegalPage',
            'pageAssemblyPerson',
            'pageAssemblyPolicyPage',
            'pageAssemblyPressReleaseListingsPage',
            'pageAssemblyPressReleasePage',
            'pageAssemblyServicePage',
            'pageAssemblyShopPage',
            'pageAssemblyStandardEvent',
            'topicExternalLink',
          ],
        },
      ],
      linkType: 'Entry',
    });
};
