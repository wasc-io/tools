const { readFile } = require('then-fs');
const sloc = require('sloc');
const globby = require('globby');
const { extname } = require('path');

// Specify all initial files in a glob
const glob = [
  './**/*',
  '!./yarn.lock',
  '!./package.json',
  '!./bower.json',
  '!./helm/**',
];

module.exports = async () => {
  const counters = {
    total: 0,
    source: 0,
    comment: 0,
    single: 0,
    block: 0,
    mixed: 0,
    empty: 0,
    todo: 0,
  };

  // Get paths from file glob
  const files = await globby(glob, {
    gitignore: true,
  });

  await Promise.all(
    files.map(async (file) => {
      try {
        let extension = extname(file).replace(/\./, '').toLowerCase();

        switch (extension) {
          case '':
          case 'graphql':
          case 'sh': {
            extension = undefined;

            break;
          }
          default: {
            break;
          }
        }
        if (extension) {
          // Read file contents
          const content = await readFile(file, 'utf-8');

          // Measure stats for the file
          let result;
          try {
            result = sloc(content, extension);
          } catch (error) {
            // Only throw if its not a non file type supported error
            if (!/File\sextension/gi.test(error.message)) throw error;

            return;
          }

          // Add stats to total count
          Object.keys(counters).forEach((key) => {
            counters[key] += result[key];
          });
        }
      } catch (error) {
        console.log(error);
      }
    }),
  );
  // Log files at the end with pretty JSON
  console.log(JSON.stringify(counters, null, '\t'));
};
