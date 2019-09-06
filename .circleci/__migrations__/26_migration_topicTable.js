module.exports = function(migration) {
  const topicTable = migration
    .createContentType('topicTable')
    .name('Component - Table')
    .description('HTML table used for tabular data')
    .displayField('name');
  topicTable
    .createField('name')
    .name('Name (administrative)')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  topicTable
    .createField('tableHeader')
    .name('Header')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  topicTable
    .createField('table')
    .name('Table')
    .type('Object')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  topicTable.changeEditorInterface('name', 'singleLine', {});
  topicTable.changeEditorInterface('tableHeader', 'singleLine', {});
  topicTable.changeEditorInterface('table', '6x0ZoE0vImvGxzUp1CTgVY', {});
};
