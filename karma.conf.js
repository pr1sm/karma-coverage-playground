// Karma configuration
// Generated on Fri Nov 08 2019 14:31:38 GMT-0800 (Pacific Standard Time)

const webpack = require('./webpack.config');

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai', 'karma-typescript'],


    // list of files / patterns to load in the browser
    files: [
      'node_modules/@babel/polyfill/dist/polyfill.js',
      // JS sources
      { pattern: 'src/**/*.js' },
      { pattern: 'test/**/*.test.js' },

      // CS sources
      { pattern: 'src/**/*.coffee' },
      { pattern: 'test/**/*.test.coffee' },

      // TS sources
      { pattern: 'src/**/*.ts' },
      { pattern: 'test/**/*.ts' },
    ],


    // list of files / patterns to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      // Setup for es5 js -- just use karma-coverage
      'src/**/*.es5.js': ['coverage'],

      // Setup for babel js -- can use istanbul babel plugin instead of karma-coverage
      'src/**/*.webpack.js': ['webpack'],
      'test/**/*.test.js': ['webpack'],

      // Setup for coffeescript -- preprocess, then use karma-coverage
      'src/**/*.coffee': ['coffee', 'coverage'],
      'test/**/*.test.coffee': ['coffee'],

      // Setup for typescript -- preprocess, then use karma-coverage
      'src/**/*.ts': ['karma-typescript', 'coverage'],
      'test/**/*.test.ts': ['karma-typescript'],
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['ChromeHeadless'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    coverageReporter: {
      includeAllSources: true,
      type: 'html',
      instrumenterOptions: {
        istanbul: {
          // Required to get source mapping of es5 js
          produceSourceMap: true,
        },
      },
    },

    // Karma Typescript Config
    karmaTypescriptConfig: {
      tsconfig: 'tsconfig.json',
    },

    // Coffee Preprocessor Config
    coffeePreprocessor: {
      options: {
        sourceMap: true,
      },
    },

    // Webpack Config
    webpack,
  });
};
