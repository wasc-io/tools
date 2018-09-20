const jest = require('jest');
const jestConfig = require('../config/jest.config');

module.exports = () => {
  const jestArgs = ['--config', JSON.stringify(jestConfig)];
  // console.log('asfd');
  jest.run(jestArgs);
};
