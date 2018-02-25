var webpackConfig = require('./webpack.config.test.js');
delete webpackConfig.entry;
delete webpackConfig.plugins;

module.exports = function(config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'spec/main.js'
    ],
    exclude: [
    ],

    preprocessors: {
      'spec/main.js': ['webpack', 'sourcemap'],
      'src/**/*.spec.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,
    // Concurrency level, how many browser should be started simultaneous
    concurrency: Infinity
  })
}
