const { readFile, writeFile } = require('then-fs');
const leasot = require('leasot');
const globby = require('globby');
const { extname } = require('path');
const paths = require('../config/paths');

// Specify all initial files in a glob
const glob = ['./**/*', '!./yarn.lock', '!./package.json', '!./bower.json', '!./helm/**'];

module.exports = async () => {
  let todos = [];

  // Get paths from file glob
  const files = await globby(glob, {
    gitignore: true,
  });

  await Promise.all(
    files.map(async file => {
      try {
        const extension = extname(file).toLowerCase();

        if (leasot.isExtSupported(extension)) {
          // Read file contents
          const content = await readFile(file, 'utf-8');

          // Measure stats for the file
          const result = leasot.parse({ ext: extension, content, fileName: file });

          todos = [...todos, ...result];
        }
      } catch (error) {
        console.log(error);
      }
    }),
  );

  // TODO maybe cli options for different todo reporters
  // Generate markdown
  const output = leasot.reporter(todos, {
    reporter: 'markdown',
  });

  // Write TODOs file
  await writeFile(`${paths.projectRoot}/TODOs.md`, output);
};
