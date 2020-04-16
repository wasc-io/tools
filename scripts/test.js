const jest = require('jest');
const jestConfig = require('../config/jest.config');

module.exports = (argv) => {
  const jestArgs = [...argv._, '--config', JSON.stringify(jestConfig)];

  // remove first entry as it's the 'test' command of this file
  jestArgs.shift();

  if (argv.coverage) {
    jestArgs.push('--coverage');
  }
  jest.run(jestArgs);
};
