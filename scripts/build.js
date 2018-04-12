const { existsSync } = require('fs');
const webpack = require('webpack');
const paths = require('../config/paths');
const webpackConfigBackendProd = require(paths.selfWebpackConfigBackendProd);
const webpackConfigFrontendProd = require(paths.selfwebpackConfigFrontendProd);

const mode = process.argv[3];

if (!mode) {
    console.error(
        'Please provide if the script should be run with the frontend or backend configuration'
    );
    console.error('wasc-tools build [frontend|backend]');
    process.exit(1);
}

if (!existsSync(paths.projectIndexJs)) {
    console.error('`src/index.js` file does not exist.');

    process.exit(1);
}

const compiler = webpack(mode === 'backend' ? webpackConfigBackendProd : webpackConfigFrontendProd);

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
