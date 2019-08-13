module.exports = function(migration) {
  const topicStats = migration.editContentType('topicStats');

  topicStats.editField('stat1Title').required(false);
  topicStats.editField('stat2Title').required(false);
  topicStats.editField('stat3Title').required(false);
  topicStats.editField('stat4Title').required(false);

  topicStats.changeEditorInterface('stat1Subtitle', 'singleLine', {
    helpText: 'This will appear red',
  });

  topicStats.changeEditorInterface('stat2Subtitle', 'singleLine', {
    helpText: 'This will appear red',
  });

  topicStats.changeEditorInterface('stat3Subtitle', 'singleLine', {
    helpText: 'This will appear red',
  });

  topicStats.changeEditorInterface('stat4Subtitle', 'singleLine', {
    helpText: 'This will appear red',
  });
};
