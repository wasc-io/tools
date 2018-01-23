const path = require('path');

const projectRoot = process.cwd();
const selfRoot = path.resolve(__dirname, '..');

const resolveProjectDirectory = (relativePath) =>
  path.resolve(projectRoot, relativePath);
const resolveSelfDirectory = (relativePath) =>
  path.resolve(selfRoot, relativePath);

module.exports = {
  projectBuild: resolveProjectDirectory('build'),
  projectIndexJs: resolveProjectDirectory('src/index.js'),
  projectPrettier: resolveProjectDirectory('node_modules/.bin/prettier'),
  projectRoot,
  projectSrc: resolveProjectDirectory('src'),
  selfESLintConfig: resolveSelfDirectory('config/.eslintrc.js'),
  selfNodeModules: resolveSelfDirectory('node_modules'),
  selfPrettierConfig: resolveSelfDirectory('config/.prettierrc.json'),
  selfPrettierIgnore: resolveSelfDirectory('config/.prettierignore'),
};
