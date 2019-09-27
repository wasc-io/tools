const path = require('path');

const projectRoot = process.cwd();
const selfRoot = path.resolve(__dirname, '..');

const resolveProjectDirectory = relativePath => path.resolve(projectRoot, relativePath);
const resolveSelfDirectory = relativePath => path.resolve(selfRoot, relativePath);

module.exports = {
  projectBuild: resolveProjectDirectory('build'),
  projectBuildIndexJs: resolveProjectDirectory('build/index.js'),
  projectIndexJs: resolveProjectDirectory('src/index.js'),
  projectRoot,
  projectSrc: resolveProjectDirectory('src'),
  projectCache: resolveProjectDirectory('.cache'),

  projectPackageJson: resolveProjectDirectory('package.json'),
  projectPnp: resolveProjectDirectory('.pnp.js'),

  selfIgnore: resolveSelfDirectory('config/.ignore'),

  selfJest: resolveSelfDirectory('node_modules/.bin/jest'),
  selfBabelNode: resolveSelfDirectory('node_modules/.bin/babel-node'),
  selfBabel: resolveSelfDirectory('node_modules/.bin/babel'),

  selfESLintConfig: resolveSelfDirectory('config/.eslintrc.js'),
  selfJestConfig: resolveSelfDirectory('config/jest.config.js'),
  selfBabelConfig: resolveSelfDirectory('config/.babelrc.js'),
};
