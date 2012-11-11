var jam = {
    "packages": [
        {
            "name": "backbone",
            "location": "../vendor/jam/backbone",
            "main": "backbone.js"
        },
        {
            "name": "backbone.layoutmanager",
            "location": "../vendor/jam/backbone.layoutmanager",
            "main": "backbone.layoutmanager.js"
        },
        {
            "name": "jquery",
            "location": "../vendor/jam/jquery",
            "main": "jquery.js"
        },
        {
            "name": "lodash",
            "location": "../vendor/jam/lodash",
            "main": "./lodash.js"
        },
        {
            "name": "underscore",
            "location": "../vendor/jam/underscore",
            "main": "underscore.js"
        },
        {
            "name": "handlebars",
            "location": "../vendor/jam/handlebars",
            "main": "handlebars.js"
        }
    ],
    "paths": {
        "libs": "../js/libs"
    },
    "version": "0.2.11",
    "shim": {
        "backbone": {
            "deps": [
                "jquery",
                "underscore"
            ],
            "exports": "Backbone"
        },
        "backbone.layoutmanager": {
            "deps": [
                "jquery",
                "backbone",
                "lodash"
            ],
            "exports": "Backbone.LayoutManager"
        },
        "handlebars": {
            "exports": "Handlebars"
        },
        "libs/backbone-localstorage": {
            "deps": [
            "backbone"
            ]
        }
    }
};

if (typeof require !== "undefined" && require.config) {
    require.config({packages: jam.packages, paths: jam.paths, shim: jam.shim});
    console.log (jam.shim['libs/backbone-localstorage'])
}
else {
    var require = {packages: jam.packages, paths: jam.paths, shim: jam.shim};
}

if (typeof exports !== "undefined" && typeof module !== "undefined") {
    module.exports = jam;
}