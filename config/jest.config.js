const paths = require('./paths');

module.exports = {
  rootDir: paths.projectRoot,
  cacheDirectory: '~/.cache',
  transform: {
    '^.+\\.jsx?$': require.resolve('./jest/JSTransformer.js'),
  },
};
