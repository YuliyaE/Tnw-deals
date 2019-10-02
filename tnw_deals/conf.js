exports.config = {

    framework: 'custom',
    frameworkPath: 'node_modules/protractor-cucumber-framework',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,

    globalTimeout: 100000,
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,

    specs: [
        'TNW_tests/features/remove_from_cart.feature'
    ],

    cucumberOpts: {
        require: 'TNW_tests/RemoveFromCartTest.js',
        format: 'summary'
    }


};