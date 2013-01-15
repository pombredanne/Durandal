﻿define(function(require) {
    var router = require('plugins/router'),
        app = require('durandal/app');

    return {
        router: router,
        search: function() {
            //It's really easy to show a message box.
            //You can add custom options too. Also, it returns a promise for the user's response.
            app.showMessage('Search not yet implemented...');
        },
        activate: function () {
            router.mapNav('welcome', 'viewmodels/welcome', 'Welcome');
            router.mapNav('flickr', 'viewmodels/flickr', 'Flickr');
            return router.activate('welcome');
        }
    };
});