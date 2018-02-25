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
      // 'node_modules/angular.js',
      // 'angular-mocks.js',
      // 'src/app.js',
      'spec/main.js'
    ],
    // files: [
    //   // { pattern: './src/app.js', watched: false },
    //   { pattern: 'src/**/*.spec.js', watched: false }
    // ],

    // list of files / patterns to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      // 'app.js': ['webpack'],
      'spec/main.js': ['webpack', 'sourcemap'],
      "src/**/*.spec.js": ["webpack", 'sourcemap']
    },
    // preprocessors: {
    //   // './src/app.js': ['webpack'],
    //   'src/**/*.spec.js': ['webpack']
    // },

    webpack: webpackConfig,

    // plugins: [
    //   'babel-core',
    //   'babel-loader',
    //   'webpack',
    //   'karma',
    //   'karma-jasmine',
    //   'karma-webpack',
    //   'karma-sourcemap-loader',
    //   'karma-chrome-launcher',
    //   'angular',
    //   'angular-mocks',
    //   'html-loader'
    //   // Karma will require() these plugins
    // ],

    // webpackMiddleware: {
    //   // webpack-dev-middleware configuration
    //   // i. e.
    //   // noInfo: true,
    //   // stats: 'errors-only'
    // },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
