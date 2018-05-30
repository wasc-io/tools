const { existsSync } = require('fs');
const webpack = require('webpack');
const paths = require('../config/paths');

module.exports = async (argv) => {
    const mode = argv._[1];

    if (!existsSync(paths.projectIndexJs)) {
        console.error('`src/index.js` file does not exist.');

        process.exit(1);
    }

    if (mode === 'backend') {
        const webpackConfigBackendProd = require(paths.selfWebpackConfigBackendProd)(argv);
        const compiler = webpack(webpackConfigBackendProd);

        compiler.run((error, stats) => {
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

            console.log(
                stats.toString({
                    colors: true,
                })
            );
        });
    } else if (mode === 'frontend') {
        // const webpackConfigFrontendProd = require(paths.selfwebpackConfigFrontendProd);
        // const compiler = webpack(webpackConfigFrontendProd);
        console.error('Frontend not supported yet. Stay tuned!');
        process.exit(1);
    }

}