# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [2.0.0-beta.1](https://github.com/wasc-io/tools/compare/v2.0.0-beta.0...v2.0.0-beta.1) (2019-09-22)

## [2.0.0-beta.0](https://github.com/wasc-io/tools/compare/v1.25.1...v2.0.0-beta.0) (2019-09-22)


### ⚠ BREAKING CHANGES

* deprecation of build and watch subcommands

### Features

* simpler setup, no webpack, deprecation of subcommands, switch to yarn ([260f114](https://github.com/wasc-io/tools/commit/260f114))

<a name="1.25.1"></a>
## [1.25.1](https://github.com/wasc-io/tools/compare/v1.25.0...v1.25.1) (2019-09-17)


### Bug Fixes

* **format:** use the selfPrettier instead of projectPrettier, since it might not be installed ([83d65a6](https://github.com/wasc-io/tools/commit/83d65a6))



<a name="1.25.0"></a>
# [1.25.0](https://github.com/wasc-io/tools/compare/v1.24.1...v1.25.0) (2019-09-16)


### Features

* **eslint:** allow i++ in loops ([3a62547](https://github.com/wasc-io/tools/commit/3a62547))



<a name="1.24.1"></a>
## [1.24.1](https://github.com/wasc-io/tools/compare/v1.24.0...v1.24.1) (2019-08-29)



<a name="1.24.0"></a>
# [1.24.0](https://github.com/wasc-io/tools/compare/v1.23.1...v1.24.0) (2019-06-26)


### Features

* add ts-loader and typecheck plugin ([45c1aea](https://github.com/wasc-io/tools/commit/45c1aea))
* **webpack:** switch to awesome typescript loader ([6c1e91c](https://github.com/wasc-io/tools/commit/6c1e91c))



<a name="1.23.1"></a>
## [1.23.1](https://github.com/wasc-io/tools/compare/v1.23.0...v1.23.1) (2019-06-21)



<a name="1.23.0"></a>
# [1.23.0](https://github.com/wasc-io/tools/compare/v1.22.2...v1.23.0) (2019-03-29)


### Features

* **format:** html formatting ([7523524](https://github.com/wasc-io/tools/commit/7523524))



<a name="1.22.2"></a>
## [1.22.2](https://github.com/wasc-io/tools/compare/v1.22.1...v1.22.2) (2018-11-30)



<a name="1.22.1"></a>
## [1.22.1](https://github.com/wasc-io/tools/compare/v1.22.0...v1.22.1) (2018-10-14)



<a name="1.22.0"></a>
# [1.22.0](https://github.com/wasc-io/tools/compare/v1.21.0...v1.22.0) (2018-09-21)


### Features

* **test:** added cli flag for collecting code coverage ([2e867a8](https://github.com/wasc-io/tools/commit/2e867a8))



<a name="1.21.0"></a>
# [1.21.0](https://github.com/wasc-io/tools/compare/v1.20.0...v1.21.0) (2018-09-21)


### Features

* added project cache path and set jest to that path ([9c312ac](https://github.com/wasc-io/tools/commit/9c312ac))



<a name="1.20.0"></a>
# [1.20.0](https://github.com/wasc-io/tools/compare/v1.19.0...v1.20.0) (2018-09-21)


### Features

* switched to using require.resolve for babel js transformer ([edba011](https://github.com/wasc-io/tools/commit/edba011))



<a name="1.19.0"></a>
# [1.19.0](https://github.com/wasc-io/tools/compare/v1.18.0...v1.19.0) (2018-09-20)


### Features

* **test:** changed to json passed arguments to jest run command ([4e79abc](https://github.com/wasc-io/tools/commit/4e79abc))



<a name="1.18.0"></a>
# [1.18.0](https://github.com/wasc-io/tools/compare/v1.17.2...v1.18.0) (2018-09-20)


### Features

* **babel:** switched to use node 10 ([782acd1](https://github.com/wasc-io/tools/commit/782acd1))
* **test:** used modulized babel configuration for use in webpack and jest config ([933e53a](https://github.com/wasc-io/tools/commit/933e53a))



<a name="1.17.2"></a>
## [1.17.2](https://github.com/wasc-io/tools/compare/v1.17.1...v1.17.2) (2018-09-20)


### Bug Fixes

* **test:** jest root path ([350ac4d](https://github.com/wasc-io/tools/commit/350ac4d))



<a name="1.17.1"></a>
## [1.17.1](https://github.com/wasc-io/tools/compare/v1.17.0...v1.17.1) (2018-09-20)


### Bug Fixes

* **test:** changed jest path to project jest ([6360651](https://github.com/wasc-io/tools/commit/6360651))



<a name="1.17.0"></a>
# [1.17.0](https://github.com/wasc-io/tools/compare/v1.16.3...v1.17.0) (2018-09-20)


### Features

* **test:** added test script based on jest with babel compiling ([28d43b7](https://github.com/wasc-io/tools/commit/28d43b7))



<a name="1.16.3"></a>
## [1.16.3](https://github.com/wasc-io/tools/compare/v1.16.2...v1.16.3) (2018-09-04)


### Bug Fixes

* added test for mjs files, to be resolved as regular javascript ([f2426f6](https://github.com/wasc-io/tools/commit/f2426f6))



<a name="1.16.2"></a>
## [1.16.2](https://github.com/wasc-io/tools/compare/v1.16.1...v1.16.2) (2018-09-03)


### Bug Fixes

* added a field resolve path to resolve the main export before the modules ([5db0a21](https://github.com/wasc-io/tools/commit/5db0a21))



<a name="1.16.1"></a>
## [1.16.1](https://github.com/wasc-io/tools/compare/v1.16.0...v1.16.1) (2018-08-27)


### Bug Fixes

* added graphql-import-loader to depedencies ([b0f3d9f](https://github.com/wasc-io/tools/commit/b0f3d9f))



<a name="1.16.0"></a>
# [1.16.0](https://github.com/wasc-io/tools/compare/v1.15.0...v1.16.0) (2018-08-14)


### Features

* **lint:** switched to babel-eslint ([4dcfaf0](https://github.com/wasc-io/tools/commit/4dcfaf0))



<a name="1.15.0"></a>
# [1.15.0](https://github.com/wasc-io/tools/compare/v1.14.0...v1.15.0) (2018-08-14)


### Features

* **eslint:** updated to ecma 2018 ([ee44759](https://github.com/wasc-io/tools/commit/ee44759))



<a name="1.14.0"></a>
# [1.14.0](https://github.com/wasc-io/tools/compare/v1.13.4...v1.14.0) (2018-08-12)


### Features

* added configuration to nodeExternal that will bundle all non JS/JSON files ([b552950](https://github.com/wasc-io/tools/commit/b552950))



<a name="1.13.4"></a>
## [1.13.4](https://github.com/wasc-io/tools/compare/v1.13.3...v1.13.4) (2018-08-06)



<a name="1.13.3"></a>
## [1.13.3](https://github.com/wasc-io/tools/compare/v1.13.2...v1.13.3) (2018-08-06)



<a name="1.13.2"></a>
## [1.13.2](https://github.com/wasc-io/tools/compare/v1.13.1...v1.13.2) (2018-08-06)



<a name="1.13.1"></a>
## [1.13.1](https://github.com/wasc-io/tools/compare/v1.13.0...v1.13.1) (2018-07-17)


### Bug Fixes

* added cwd for eslint, so ignores can be properly mapped ([5dd2b06](https://github.com/wasc-io/tools/commits/5dd2b06))



<a name="1.13.0"></a>
# [1.13.0](https://github.com/wasc-io/tools/compare/v1.12.0...v1.13.0) (2018-07-17)


### Features

* updated ignore rules for prettier and eslint ([23f7760](https://github.com/wasc-io/tools/commits/23f7760))



<a name="1.12.0"></a>
# [1.12.0](https://github.com/wasc-io/tools/compare/v1.11.0...v1.12.0) (2018-07-10)


### Features

* babel compile object spread operator ([cda209b](https://github.com/wasc-io/tools/commits/cda209b))



<a name="1.11.0"></a>
# [1.11.0](https://github.com/wasc-io/tools/compare/v1.10.2...v1.11.0) (2018-06-26)


### Features

* **lint:** changed eslints execute path to project root ([f4ae588](https://github.com/wasc-io/tools/commits/f4ae588))



<a name="1.10.2"></a>
## [1.10.2](https://github.com/wasc-io/tools/compare/v1.10.1...v1.10.2) (2018-06-26)



<a name="1.10.1"></a>
## [1.10.1](https://github.com/wasc-io/tools/compare/v1.10.0...v1.10.1) (2018-06-26)



<a name="1.10.0"></a>
# [1.10.0](https://github.com/wasc-io/tools/compare/v1.9.2...v1.10.0) (2018-06-26)


### Features

* updated eslint-config to newest standards ([6cc6765](https://github.com/wasc-io/tools/commits/6cc6765))
* updated prettier-config to align with new airbnb eslint-config ([3df8786](https://github.com/wasc-io/tools/commits/3df8786))



<a name="1.9.2"></a>
## [1.9.2](https://github.com/wasc-io/tools/compare/v1.9.1...v1.9.2) (2018-06-24)


### Bug Fixes

* switched to project prettier from self prettier ([47a7019](https://github.com/wasc-io/tools/commits/47a7019))



<a name="1.9.1"></a>
## [1.9.1](https://github.com/wasc-io/tools/compare/v1.9.0...v1.9.1) (2018-05-30)


### Bug Fixes

* webpack config as function fix ([b0986b4](https://github.com/wasc-io/tools/commits/b0986b4))



<a name="1.9.0"></a>
# [1.9.0](https://github.com/wasc-io/tools/compare/v1.8.5...v1.9.0) (2018-05-30)


### Bug Fixes

* wrapped yargs boolean attributes into string ticks ([9009d70](https://github.com/wasc-io/tools/commits/9009d70))


### Features

* upgraded dependencies ([2240d08](https://github.com/wasc-io/tools/commits/2240d08))



<a name="1.8.5"></a>
## [1.8.5](https://github.com/wasc-io/tools/compare/v1.8.4...v1.8.5) (2018-05-22)



<a name="1.8.4"></a>
## [1.8.4](https://github.com/wasc-io/tools/compare/v1.8.3...v1.8.4) (2018-05-22)



<a name="1.8.3"></a>
## [1.8.3](https://github.com/wasc-io/tools/compare/v1.8.2...v1.8.3) (2018-05-22)



<a name="1.8.2"></a>
## [1.8.2](https://github.com/wasc-io/tools/compare/v1.8.1...v1.8.2) (2018-05-22)



<a name="1.8.1"></a>
## [1.8.1](https://github.com/wasc-io/tools/compare/v1.8.0...v1.8.1) (2018-05-21)


### Bug Fixes

* removed unused variables for linting ([3c22656](https://github.com/wasc-io/tools/commits/3c22656))



<a name="1.8.0"></a>
# [1.8.0](https://github.com/wasc-io/tools/compare/v1.7.1...v1.8.0) (2018-04-28)


### Features

* updated whole cli to yargs with more specific cli options and better help management ([46cca44](https://github.com/wasc-io/tools/commits/46cca44))



<a name="1.7.1"></a>
## [1.7.1](https://github.com/wasc-io/tools/compare/v1.7.0...v1.7.1) (2018-04-27)


### Bug Fixes

* implemented working backend build and watching with nodemon-webpack-plugin ([ddc609a](https://github.com/wasc-io/tools/commits/ddc609a))



<a name="1.7.0"></a>
# [1.7.0](https://github.com/wasc-io/tools/compare/v1.6.1...v1.7.0) (2018-04-14)


### Features

* readded clean-webpack-plugin for backend config ([d79c1d4](https://github.com/wasc-io/tools/commits/d79c1d4))



<a name="1.6.1"></a>
## [1.6.1](https://github.com/wasc-io/tools/compare/v1.6.0...v1.6.1) (2018-04-13)


### Bug Fixes

* added babel-loader to dependencies ([14914eb](https://github.com/wasc-io/tools/commits/14914eb))



<a name="1.6.0"></a>
# [1.6.0](https://github.com/wasc-io/tools/compare/v1.5.1...v1.6.0) (2018-04-13)


### Features

* added source-map-support as peer dependency and added note in README for explanation ([9aa909b](https://github.com/wasc-io/tools/commits/9aa909b))



<a name="1.5.1"></a>
## [1.5.1](https://github.com/wasc-io/tools/compare/v1.5.0...v1.5.1) (2018-04-12)


### Bug Fixes

* removed cleanwebpackplugin import from webpack config ([9e5ecf7](https://github.com/wasc-io/tools/commits/9e5ecf7))



<a name="1.5.0"></a>
# [1.5.0](https://github.com/wasc-io/tools/compare/v1.4.2...v1.5.0) (2018-04-12)


### Bug Fixes

* removed cleanwebpack plugin, since nodemon throws if build folder is not existent ([e6c6bd1](https://github.com/wasc-io/tools/commits/e6c6bd1))


### Features

* added progressBarPlugin to webpack config ([f54ab6c](https://github.com/wasc-io/tools/commits/f54ab6c))
* **watch:** added closing handler to stop webpacks watching ([b7dc272](https://github.com/wasc-io/tools/commits/b7dc272))



<a name="1.4.2"></a>
## [1.4.2](https://github.com/wasc-io/tools/compare/v1.4.1...v1.4.2) (2018-04-12)


### Bug Fixes

* error object naming ([71c9a5c](https://github.com/wasc-io/tools/commits/71c9a5c))



<a name="1.4.1"></a>
## [1.4.1](https://github.com/wasc-io/tools/compare/v1.4.0...v1.4.1) (2018-04-12)


### Bug Fixes

* type nodemon ([476fa27](https://github.com/wasc-io/tools/commits/476fa27))



<a name="1.4.0"></a>
# [1.4.0](https://github.com/wasc-io/tools/compare/v1.3.2...v1.4.0) (2018-04-12)


### Bug Fixes

* exit build script if mode is not provided ([8bc1683](https://github.com/wasc-io/tools/commits/8bc1683))


### Features

* added mode: production to build command ([a60658c](https://github.com/wasc-io/tools/commits/a60658c))
* added watch script for watching build tasks and serving automatically with nodemon ([9416781](https://github.com/wasc-io/tools/commits/9416781))



<a name="1.3.2"></a>
## [1.3.2](https://github.com/wasc-io/tools/compare/v1.3.1...v1.3.2) (2018-04-12)


### Bug Fixes

* added nsp ignore to ignore the vulnerability in webpack ([209dff1](https://github.com/wasc-io/tools/commits/209dff1))



<a name="1.3.1"></a>
## [1.3.1](https://github.com/wasc-io/tools/compare/v1.3.0...v1.3.1) (2018-04-12)


### Bug Fixes

* added source-map support to webpack config for accurate stack traces ([4a91182](https://github.com/wasc-io/tools/commits/4a91182))



<a name="1.3.0"></a>
# [1.3.0](https://github.com/wasc-io/tools/compare/v1.2.0...v1.3.0) (2018-04-12)


### Bug Fixes

* fixed code count non supported extension error ([8d575e8](https://github.com/wasc-io/tools/commits/8d575e8))
* fixed todo script by using leasots integrated file type detection ([7f66632](https://github.com/wasc-io/tools/commits/7f66632))


### Features

* exported prettier and eslint configs for usage with IDE tooling ([82c9d36](https://github.com/wasc-io/tools/commits/82c9d36))
* implemented backend building with webpack ([aa296d1](https://github.com/wasc-io/tools/commits/aa296d1))



<a name="1.2.0"></a>
# [1.2.0](https://github.com/wasc-io/tools/compare/v1.1.3...v1.2.0) (2018-03-29)


### Bug Fixes

* **todo:** added a lot of not supported extensions and put them in an array ([0cb02c4](https://github.com/wasc-io/tools/commits/0cb02c4))


### Features

* **format:** added build, dist and other miscellaneous directories to prettierignore ([7b418b4](https://github.com/wasc-io/tools/commits/7b418b4))



# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.
