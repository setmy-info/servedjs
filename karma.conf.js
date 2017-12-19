
module.exports = function (config) {
    config.set({
        basePath: './',
        files: [
            // main library
            'src/main/webapp/js/lib/servicejs/dist/servicejs.min.js',
            'src/main/webapp/js/servedjs.min.js',
            //'src/main/webapp/js/servedjs.js',
            // TESTABLE ITEMS - examples and test services

            // tests
            'src/test/js/unit/**/*.spec.js'
        ],
        autoWatch: true,
        colors: true,
        logLevel: config.LOG_INFO,
        port: 9876,
        singleRun: false,
        reporters: ['progress', 'coverage', 'html'/*, 'spec'*/],
        frameworks: ['jasmine'],
        browsers: [/*'Chrome',*/'PhantomJS'],
        preprocessors: {
            'src/main/webapp/js/*.js': ['coverage']
        },
        htmlReporter: {
            outputDir: 'target/html'
        },
        coverageReporter: {
            type: 'html',
            dir: 'target/coverage',
            reporters: [
                {type: 'lcov', subdir: '.'},
                {type: 'text-summary'}
            ]
        }
    });
};
