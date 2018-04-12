const script = process.argv.length > 1 ? process.argv[2] : undefined;
const chalk = require('chalk');

switch (script) {
    case 'build':
    case 'lint':
    case 'format':
    case 'count':
    case 'todo':
    case 'watch':
    case 'test': {
        require(`../scripts/${script}.js`);
        break;
    }
    case '--version': {
        const { version } = require('../package.json');
        console.log(version);

        break;
    }
    case '--help': {
        console.log(chalk.red.bold('wasc-tools'));
        console.log(
            `A simple CLI for testing, linting, formatting Javascript projects, with the company required rules`
        );
        console.log(chalk`
    wasc-tools [script]

    ${chalk.red(
        'build'
    )}  Build the project using webpack for usage with newer JS Syntax. 'backend' or 'frontend' flag is required to determine for what target to build
    ${chalk.red(
        'watch'
    )}  Run the build command, watch for changes and start running the compiled code with hot refreshing. 'backend' or 'frontend' flag is required to determine for what target to build
    ${chalk.red('lint')}   Liting all supported files with Eslint
    ${chalk.red('format')} Format all supported files with Prettier
    ${chalk.red('test')}   Running tests in test/ directory with mocha
    ${chalk.red('count')}  Count all lines and display stats about how many lines 
            are commented, empty or contain TODOs
    ${chalk.red(
        'todo'
    )}   Parse all source files for TODOs and create a TODOS.md file with all results
`);
        break;
    }
    default: {
        console.error(`Unknwon script "${script}".`);

        process.exit(1);
    }
}
