const path = require('path');

const projectRoot = process.cwd();
const selfRoot = path.resolve(__dirname, '..');

const resolveProjectDirectory = (relativePath) =>
  path.resolve(projectRoot, relativePath);
const resolveSelfDirectory = (relativePath) =>
  path.resolve(selfRoot, relativePath);

function resolveEntry(entry) {
  return resolveProjectDirectory(entry);
}

module.exports = {
  resolveEntry,
  projectBuild: resolveProjectDirectory('build'),
  projectIndexJs: resolveProjectDirectory('src/index.js'),
  projectRoot,
  projectSrc: resolveProjectDirectory('src'),
  projectCache: resolveProjectDirectory('.cache'),

  selfIgnore: resolveSelfDirectory('config/.ignore'),

  projectPrettier: resolveProjectDirectory('node_modules/.bin/prettier'),
  projectJest: resolveProjectDirectory('node_modules/.bin/jest'),

  selfPrettier: resolveSelfDirectory('node_modules/.bin/prettier'),
  selfJest: resolveSelfDirectory('node_modules/.bin/jest'),

  selfESLintConfig: resolveSelfDirectory('config/.eslintrc.js'),
  selfNodeModules: resolveSelfDirectory('node_modules'),
  selfPrettierConfig: resolveSelfDirectory('config/.prettierrc.json'),
  selfJestConfig: resolveSelfDirectory('config/jest.config.js'),

  selfWebpackConfigBackendProd: resolveSelfDirectory(
    'config/webpack.config.backend.prod.js',
  ),
  selfwebpackConfigFrontendProd: resolveSelfDirectory(
    'config/webpack.config.frontend.prod.js',
  ),
};
