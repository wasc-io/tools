const path = require('path');

const projectRoot = process.cwd();
const selfRoot = path.resolve(__dirname, '..');

const resolveProjectDirectory = relativePath => path.resolve(projectRoot, relativePath);
const resolveSelfDirectory = relativePath => path.resolve(selfRoot, relativePath);

module.exports = {
  projectBuild: resolveProjectDirectory('build'),
  projectIndexJs: resolveProjectDirectory('src/index.js'),
  projectRoot,
  projectSrc: resolveProjectDirectory('src'),
  projectCache: resolveProjectDirectory('.cache'),

  projectPackageJson: resolveProjectDirectory('package.json'),
  projectPnp: resolveProjectDirectory('.pnp.js'),

  selfIgnore: resolveSelfDirectory('config/.ignore'),

  selfPrettier: resolveSelfDirectory('node_modules/.bin/prettier'),
  selfJest: resolveSelfDirectory('node_modules/.bin/jest'),
  selfBabelNode: resolveSelfDirectory('node_modules/.bin/babel-node'),

  selfESLintConfig: resolveSelfDirectory('config/.eslintrc.js'),
  selfPrettierConfig: resolveSelfDirectory('config/.prettierrc.json'),
  selfJestConfig: resolveSelfDirectory('config/jest.config.js'),
  selfBabelConfig: resolveSelfDirectory('config/.babelrc.js'),
};
