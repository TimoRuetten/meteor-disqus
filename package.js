Package.describe({
  name: 'visudare:disqus',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Disqus wrapper for meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/Visudare/meteor-disqus.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use('templating');
  api.use('deps');
  api.use('session');
  api.versionsFrom('1.1.0.2');
  api.addFiles('disqus.html');
  api.addFiles('disqus.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('visudare:disqus');
  api.addFiles('disqus-tests.js');
});
