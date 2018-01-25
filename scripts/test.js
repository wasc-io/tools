const execa = require('execa');
const paths = require('../config/paths');

const mochaArgs = [
    paths.selfMocha,
    '--timeout',
    225000,
    '--check-leaks',
    '--exit',
    './test/**/*.{js,ts}'
];
execa(paths.selfNyc, mochaArgs, {
    env: process.env,
    cwd: paths.projectRoot,
    stdio: 'inherit',
}).catch((error) => {
    console.error('Command failed with the following error:\n');
    console.error(error);
    process.exit(1);
});

