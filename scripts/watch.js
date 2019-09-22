const { existsSync } = require('fs');
const webpack = require('webpack');
const nodemon = require('nodemon');
const paths = require('../config/paths');
const package = require(paths.projectPackageJson);

/**
 * Handler to stop webpack watching, when closing the script
 * @param {Object} watching The watching object from webpack
 */
function close(watching) {
  watching.close();
}

module.exports = async argv => {
  if (!existsSync(paths.projectIndexJs)) {
    console.error('`src/index.js` file does not exist.');

    process.exit(1);
  }

  const nodeArgs = [];

  if (argv.pnp) {
    nodeArgs.push(`-r ${paths.projectPnp}`);
  }

  nodemon({
    script: paths.projectIndexJs,
    execMap: {
      js: [
        paths.selfBabelNode,
        '--source-maps',
        '--config-file',
        paths.selfBabelConfig,
        ...nodeArgs,
      ],
    },
  });

  nodemon.on('quit', function() {
    process.exit();
  });
};
