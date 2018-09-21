const jest = require('jest');
const jestConfig = require('../config/jest.config');

module.exports = argv => {
  const jestArgs = ['--config', JSON.stringify(jestConfig)];
  if (argv.coverage) {
    jestArgs.push('--coverage');
  }
  jest.run(jestArgs);
};
