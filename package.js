Package.describe({
  name: 'skehoe1989:medium-editor-insert-plugin',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.2.4');
  api.use(['ecmascript','jquery','mediumeditor:mediumeditor@5.2.0']);
  api.mainModule('medium-editor-insert-plugin/dist/js/medium-editor-insert-plugin.js', 'client');
});
