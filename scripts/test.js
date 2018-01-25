const { sync } = require('cross-spawn');
const paths = require('../config/paths');

const mochaArgs = [
    paths.projectMocha,
    '--timeout',
    225000,
    '--check-leaks',
    '--exit',
    './test/**/*.{js,ts}'
];
const result = sync(paths.projectNyc, mochaArgs, {
    env: process.env,
    cwd: paths.projectRoot,
    stdio: 'inherit',
});

if (result.error) {
    console.error('Command failed with the following error:\n');
    console.error(result.error);

    process.exit(1);
}
