const execa = require('execa');
const paths = require('../config/paths');

module.exports = (argv) => {
    const prettierArgs = [
        argv['dry-run'] ? '--list-different' : '--write',
        '--config',
        paths.selfPrettierConfig,
        '--ignore-path',
        paths.selfPrettierIgnore,
        `./**/*.{js,json,graphql,md}`,
    ];
    execa(paths.selfPrettier, prettierArgs, {
        env: process.env,
        cwd: paths.projectRoot,
        stdio: 'inherit',
    }).catch((error) => {
        console.error('Command failed with the following error:\n');
        console.error(error);
        process.exit(1);
    });
}