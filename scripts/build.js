const { existsSync } = require('fs');
const paths = require('../config/paths');
const build = require('../lib/build');

module.exports = async () => {
  if (!existsSync(paths.projectIndexJs)) {
    console.error('`src/index.js` file does not exist.');

    process.exit(1);
  }

  build();
};
