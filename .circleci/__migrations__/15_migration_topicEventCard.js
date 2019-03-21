const linkField = require('../field-types/link');

module.exports = function(migration) {
  const deleteLink = migration
    .editContentType('topicEventCard')
    .deleteField('secondaryCtaLink');

  const topicLinkBox = migration
    .editContentType('topicEventCard')
    .createField('secondaryCtaLink')
    .name('Secondary CTA Link')
    .type('Array')
    .localized(false)
    .required(false)
    .validations([
      {
        size: {
          max: 1,
        },
      },
    ])
    .disabled(false)
    .omitted(false)
    .items({
      type: 'Link',

      validations: [
        {
          linkContentType: [
            'pageAssemblyChallengeEvent',
            'pageAssemblyStandardEvent',
          ],
        },
      ],

      linkType: 'Entry',
    });
};
