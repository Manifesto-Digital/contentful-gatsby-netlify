module.exports = function(migration) {
  const topicPerson = migration
    .createContentType('topicPerson')
    .name('Topic - Person')
    .description('')
    .displayField('firstName');
  topicPerson
    .createField('firstName')
    .name('First Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  topicPerson
    .createField('lastName')
    .name('Last Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  topicPerson
    .createField('jobTitle')
    .name('Job Title')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  topicPerson
    .createField('photo')
    .name('Photo')
    .type('Link')
    .localized(false)
    .required(true)
    .validations([
      {
        linkMimetypeGroup: ['image'],
      },
      {
        assetFileSize: {
          min: null,
          max: 524288,
        },
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType('Asset');

  topicPerson
    .createField('bio')
    .name('Bio')
    .type('Text')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  topicPerson
    .createField('category')
    .name('Category')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([
      {
        in: ['Board', 'Blogger'],
      },
    ])
    .disabled(false)
    .omitted(false);

  topicPerson
    .createField('phoneNumber')
    .name('Phone Number')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  topicPerson
    .createField('emailAddress')
    .name('Email Address')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern: '^\\w[\\w.-]*@([\\w-]+\\.)+[\\w-]+$',
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  topicPerson.changeEditorInterface('firstName', 'singleLine', {});
  topicPerson.changeEditorInterface('lastName', 'singleLine', {});
  topicPerson.changeEditorInterface('jobTitle', 'singleLine', {});
  topicPerson.changeEditorInterface('photo', 'assetLinkEditor', {});
  topicPerson.changeEditorInterface('bio', 'multipleLine', {});
  topicPerson.changeEditorInterface('category', 'dropdown', {});
  topicPerson.changeEditorInterface('phoneNumber', 'singleLine', {});
  topicPerson.changeEditorInterface('emailAddress', 'singleLine', {});
};
