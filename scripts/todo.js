const { readFile, writeFile } = require('then-fs');
const leasot = require('leasot');
const globby = require('globby');
const { extname } = require('path');
const paths = require('../config/paths');

// Specify all initial files in a glob
const glob = ['./**/*', '!./yarn.lock', '!./package.json', '!./bower.json', '!./helm/**'];

(async () => {
    let todos = [];

    // Get paths from file glob
    const files = await globby(glob, {
        gitignore: true,
    });

    await Promise.all(
        files.map(async (file) => {
            try {

                let extension = extname(file);

                switch (extension) {
                    case '.graphql':
                    case '.md': {
                        extension = undefined;
                        break;
                    }
                }
                if (extension) {
                    // Read file contents
                    const content = await readFile(file, 'utf-8');

                    // console.log(extension);
                    // Measure stats for the file
                    const result = leasot.parse({ext: extension, content, fileName: file});

                    todos = [...todos, ...result];
                    // // Add stats to total count
                    // (Object.keys(counters)).map((key) => {
                    //     counters[key] += result[key];
                    // });
                }
            } catch (error) {
                console.log(error);
            }
        })
    );
    // Generate markdown
    const output = leasot.reporter(todos, {
        reporter: 'markdown',
    });

    // Write TODOs file
    await writeFile(`${paths.projectRoot}/TODOs.md`, output);
})();
