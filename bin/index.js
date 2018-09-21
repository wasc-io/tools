#!/usr/bin/env node

require('dotenv').config();

const currentNodeVersion = process.versions.node;
const semver = currentNodeVersion.split('.');
const major = semver[0];

if (major < 6) {
  console.error('You are running Node ' + currentNodeVersion + '.'); // eslint-disable-line prefer-template
  console.error('Please update your version of Node to 6 or higher.');

  process.exit(1);
}

const argv = require('yargs') // eslint-disable-line prefer-destructuring
  .usage(
    '$0 <command> [options], a tool for creating front- and backend javascript projects alike, with builtin prettier, eslint and babel-compiling',
  )
  .command('build', 'build the project using webpack-babel compiling', yargs => {
    yargs
      .command('frontend', 'for frontend projects [not supported yet]')
      .command('backend', 'for nodeJS based backend projects')
      .demand(1, 'please select which project type you have');
  })
  .command('watch', 'build and rebuild the project on source changes', yargs => {
    yargs
      .command('frontend', 'for frontend projects [not supported yet]')
      .command('backend', 'for nodeJS based backend projects', yargs2 => {
        yargs2
          .positional('debug', {
            descibe: 'enable the node debugging protocol in the nodemon process',
            alias: 'd',
            type: 'boolean',
            default: false,
          })
          .positional('env', {
            describe: 'should dotenv be preloaded with the node process',
            alias: 'e',
            type: 'boolean',
            default: true,
          });
      })
      .demand(1, 'please select which project type you have');
  })
  .command(
    'lint',
    'lint the project using eslint and the wasc-tools eslint configuration',
    yargs => {
      yargs.positional('write', {
        describe: 'correct all problems in place in the files',
        alias: 'w',
        type: 'boolean',
        default: false,
      });
    },
  )
  .command('format', 'format the code using prettier with the wasc style guidelines', yargs => {
    yargs.positional('dry-run', {
      describe: "only print the files with differences and don't write the files in place",
      type: 'boolean',
      default: false,
    });
  })
  .command('count', 'count the lines of code in all supported source-files')
  .command(
    'todo',
    'parse all todos from the sourcefiles and display them neatly in a markdown file',
  )
  .command(
    'test',
    'this will run tests using jest found in __tests__ directory on JS files',
    yargs => {
      yargs.positional('coverage', {
        describe: 'Collect coverage from jest',
        type: 'boolean',
        default: false,
      });
    },
  )
  .help('h')
  .alias('h', 'help')
  .alias('v', 'version')
  .epilog(`© wasc GmbH. By Nicolai Schmid. All rights reserved.`).argv;

// TODO Require Scripts individually inside yargs
require(`../scripts/${argv._[0]}`)(argv);
