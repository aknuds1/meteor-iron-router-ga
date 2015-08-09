'use strict';
Package.describe({
    name: 'aknudsen:iron-router-ga',
    summary: 'Google analytics (universal edition) with some Iron Router sugar for tracking page views.',
    version: '0.6.1',
    git: 'https://github.com/aknudsen/meteor-iron-router-ga.git'
});

Package.onUse(function(api) {
    api.versionsFrom('METEOR@1.0.1');
    api.use([ 'templating', 'iron:router@1.0.0' ], 'client');

    api.addFiles([
        'lib/body.html',
        'lib/ga.js',
        'lib/router.js'
    ], 'client');

    api.addFiles([
        'lib/browser_policy.js'
    ], 'server');
});
