const path = require('path');

const projectRoot = process.cwd();
const selfRoot = path.resolve(__dirname, '..');

const resolveProjectDirectory = (relativePath) => path.resolve(projectRoot, relativePath);
const resolveSelfDirectory = (relativePath) => path.resolve(selfRoot, relativePath);

module.exports = {
    projectBuild: resolveProjectDirectory('build'),
    projectIndexJs: resolveProjectDirectory('src/index.js'),
    projectRoot,
    projectSrc: resolveProjectDirectory('src'),

    projectPrettier: resolveProjectDirectory('node_modules/.bin/prettier'),
    projectMocha: resolveProjectDirectory('node_moules/.bin/mocha'),
    projectNyc: resolveProjectDirectory('node_modules/.bin/nyc'),

    selfESLintConfig: resolveSelfDirectory('config/.eslintrc.js'),
    selfNodeModules: resolveSelfDirectory('node_modules'),
    selfPrettierConfig: resolveSelfDirectory('config/.prettierrc.json'),
    selfPrettierIgnore: resolveSelfDirectory('config/.prettierignore'),
};
