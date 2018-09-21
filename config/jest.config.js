const paths = require('./paths');

module.exports = {
  rootDir: paths.projectRoot,
  cacheDirectory: paths.projectCache,
  transform: {
    '^.+\\.jsx?$': require.resolve('./jest/JSTransformer.js'),
  },
};
