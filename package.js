Package.describe({
  name: 'jorisroling:orion-lang-nl',
  /**
   * Try to keep the same version of Orion, so people know
   * which version is translated or maybe they want to use
   * a old Orion version.
   *
   * If you want to update this package change only the minor 
   * version indicator: 1.1.1, 1.1.2. Always keep the current
   * orion version (currently 1.1.x).
   */
  version: '1.1.0',
  summary: 'Orion dutch language',
  git: 'https://github.com/jorisroling/orion-lang-nl',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use('orionjs:lang-en@1.1.0'); // This is the base language
  api.imply('orionjs:lang-en');

  api.addFiles('nl.js');
});
