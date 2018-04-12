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
    projectMocha: resolveProjectDirectory('node_modules/.bin/mocha'),
    projectNyc: resolveProjectDirectory('node_modules/.bin/nyc'),

    selfPrettier: resolveSelfDirectory('node_modules/.bin/prettier'),
    selfMocha: resolveSelfDirectory('node_modules/.bin/mocha'),
    selfNyc: resolveSelfDirectory('node_modules/.bin/nyc'),

    selfESLintConfig: resolveSelfDirectory('config/.eslintrc.js'),
    selfNodeModules: resolveSelfDirectory('node_modules'),
    selfPrettierConfig: resolveSelfDirectory('config/.prettierrc.json'),
    selfPrettierIgnore: resolveSelfDirectory('config/.prettierignore'),

    selfWebpackConfigBackendProd: resolveSelfDirectory('config/webpack.config.backend.prod.js'),
    selfwebpackConfigFrontendProd: resolveSelfDirectory('config/webpack.config.frontend.prod.js'),
};
