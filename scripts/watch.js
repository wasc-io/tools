const { existsSync } = require('fs');
const webpack = require('webpack');
const paths = require('../config/paths');
const configBuilder = require('../config/webpack');

/**
 * Handler to stop webpack watching, when closing the script
 * @param {Object} watching The watching object from webpack
 */
function close(watching) {
  watching.close();
}

module.exports = async (argv) => {
  if (!existsSync(paths.projectIndexJs)) {
    console.error('`src/index.js` file does not exist.');

    process.exit(1);
  }

  const config = configBuilder(argv);
  const compiler = webpack(config);
  const watching = compiler.watch(
    {
      aggregateTimeout: 300,
    },
    (error, stats) => {
      // Handle webpack configuration errors
      if (error) {
        console.error(error.stack || error);
        if (error.details) {
          console.error(error.details);
        }

        process.exit(1);
      }

      const info = stats.toJson();

      // Handle compilation errors
      if (stats.hasErrors()) {
        console.error(info.errors);

        process.exit(1);
      }

      // Print any warnings before anything else
      if (stats.hasWarnings()) {
        console.warn(info.warnings);
      }
    },
  );
  // Stop watching on kill
  process.on('SIGINT', close.bind(null, watching));
  process.on('SIGUSR1', close.bind(null, watching));
  process.on('SIGUSR2', close.bind(null, watching));
};
