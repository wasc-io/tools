const babelJest = require('babel-jest');

const babelrc = require('./.babelrc');
const paths = require('./paths');

module.exports = {
  rootDir: paths.projectRoot,
  cacheDirectory: '~/.cache',
  transform: {
    '^.+\\.jsx?$': babelJest.createTransformer(babelrc),
  },
};
