module.exports = function(migration) {
  const migrationVersion = migration
    .createContentType('migrationVersion')
    .name('Migration Version')
    .description('tracks migrations for content models');
  migrationVersion
    .createField('migrationVersion')
    .name('Migration version')
    .type('Integer')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  migrationVersion.changeEditorInterface(
    'migrationVersion',
    'numberEditor',
    {}
  );
};
