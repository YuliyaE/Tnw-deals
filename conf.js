exports.config = {

    framework: 'custom',
    frameworkPath: 'node_modules/protractor-cucumber-framework',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,

    globalTimeout: 100000,
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,

    specs: [
        'tnw_deals/TNW_tests/features/*.feature',
    ],

    cucumberOpts: {
        require: 'tnw_deals/steps/*.js',
        tags: [
            '@all',
            '@addproduct or @removeproduct'
        ],
        // format: 'pretty',
    },

    onPrepare: function () {
        browser.manage().window().maximize();
    }

};