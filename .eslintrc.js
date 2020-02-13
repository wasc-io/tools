const config = require('./config/.eslintrc.js');

module.exports = Object.assign(config, {
  rules: Object.assign(config.rules, {
    'filenames/match-regex': [2, '^[a-zA-Z]+(\\.config)?$', true],
  }),
});
