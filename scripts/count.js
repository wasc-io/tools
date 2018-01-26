const { readFile } = require('then-fs');
const sloc = require('sloc');
const globby = require('globby');
const { extname } = require('path');

// Specify all initial files in a glob
const glob = ['./**/*', '!./yarn.lock', '!./package.json', '!./bower.json'];

async function run() {
    let counters = { total: 0, source: 0, comment: 0, single: 0, block: 0, mixed: 0, empty: 0, todo: 0 };

    // Get paths from file glob
    const files = await globby(glob, {
        gitignore: true,
    });

    await Promise.all(
        files.map(async (file) => {
            try {
                const extension = extname(file).replace(/\./, '');
                // Read file contents
                const content = await readFile(file, 'utf-8');

                // Measure stats for the file
                const result = sloc(content, extension);

                // Add stats to total count
                (Object.keys(counters)).map((key) => {
                    counters[key] += result[key];
                });
            } catch (error) {
                console.log(error);
            }
        })
    );
    // Log files at the end with pretty JSON
    console.log(JSON.stringify(counters, null, '\t'));
}

run();
