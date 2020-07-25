const paths = require('./paths');

module.exports = {
  rootDir: paths.projectRoot,
  cacheDirectory: paths.projectCache,
  setupFiles: ['dotenv/config'],
  transform: {
    '^.+\\.jsx?$': require.resolve('./jest/JSTransformer.js'),
  },
};
