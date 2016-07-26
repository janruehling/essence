var wallabify = require('wallabify')
var wallabyPostprocessor = wallabify({})

module.exports = function (wallaby) {
  return {
    files: [
      {pattern: 'src/**/*.js', load: false}
    ],
    tests: [
      {pattern: 'test/**/*.spec.js', load: false}
    ],
    compilers: {
      '**/**/*.js': wallaby.compilers.babel({
        presets: ['es2015', 'stage-0']
      })
    },
    postprocessor: wallabyPostprocessor,
    testFramework: 'mocha',
    bootstrap: function () {
      window.__moduleBundler.loadTests()
    }
  }
}
