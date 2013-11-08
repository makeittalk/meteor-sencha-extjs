Package.describe({
  summary: "Simple Sencha ExtJS 4 integration on Meteor"
});

Package.on_use(function (api, where) {
  api.use(['templating'], 'client');

  api.add_files('ext-all.js', 'client');
  api.add_files('neptune-all.css', 'client');
});