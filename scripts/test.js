const jest = require('jest');
const paths = require('../config/paths');

module.exports = () => {
  const jestArgs = [`--config=${paths.selfJestConfig}`];

  jest.run(jestArgs);
};
