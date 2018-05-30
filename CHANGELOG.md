# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="1.9.1"></a>
## [1.9.1](https://git.nicolaischmid.de/wasc-npm/wasc-tools/compare/v1.9.0...v1.9.1) (2018-05-30)


### Bug Fixes

* webpack config as function fix ([b0986b4](https://git.nicolaischmid.de/wasc-npm/wasc-tools/commits/b0986b4))



<a name="1.9.0"></a>
# [1.9.0](https://git.nicolaischmid.de/wasc-npm/wasc-tools/compare/v1.8.5...v1.9.0) (2018-05-30)


### Bug Fixes

* wrapped yargs boolean attributes into string ticks ([9009d70](https://git.nicolaischmid.de/wasc-npm/wasc-tools/commits/9009d70))


### Features

* upgraded dependencies ([2240d08](https://git.nicolaischmid.de/wasc-npm/wasc-tools/commits/2240d08))



<a name="1.8.5"></a>
## [1.8.5](https://git.nicolaischmid.de/wasc-npm/wasc-tools/compare/v1.8.4...v1.8.5) (2018-05-22)



<a name="1.8.4"></a>
## [1.8.4](https://git.nicolaischmid.de/wasc-npm/wasc-tools/compare/v1.8.3...v1.8.4) (2018-05-22)



<a name="1.8.3"></a>
## [1.8.3](https://git.nicolaischmid.de/wasc-npm/wasc-tools/compare/v1.8.2...v1.8.3) (2018-05-22)



<a name="1.8.2"></a>
## [1.8.2](https://git.nicolaischmid.de/wasc-npm/wasc-tools/compare/v1.8.1...v1.8.2) (2018-05-22)



<a name="1.8.1"></a>
## [1.8.1](https://git.nicolaischmid.de/wasc-npm/wasc-tools/compare/v1.8.0...v1.8.1) (2018-05-21)


### Bug Fixes

* removed unused variables for linting ([3c22656](https://git.nicolaischmid.de/wasc-npm/wasc-tools/commits/3c22656))



<a name="1.8.0"></a>
# [1.8.0](https://git.nicolaischmid.de/wasc-npm/wasc-tools/compare/v1.7.1...v1.8.0) (2018-04-28)


### Features

* updated whole cli to yargs with more specific cli options and better help management ([46cca44](https://git.nicolaischmid.de/wasc-npm/wasc-tools/commits/46cca44))



<a name="1.7.1"></a>
## [1.7.1](https://git.nicolaischmid.de/wasc-npm/wasc-tools/compare/v1.7.0...v1.7.1) (2018-04-27)


### Bug Fixes

* implemented working backend build and watching with nodemon-webpack-plugin ([ddc609a](https://git.nicolaischmid.de/wasc-npm/wasc-tools/commits/ddc609a))



<a name="1.7.0"></a>
# [1.7.0](https://git.nicolaischmid.de/wasc-npm/wasc-tools/compare/v1.6.1...v1.7.0) (2018-04-14)


### Features

* readded clean-webpack-plugin for backend config ([d79c1d4](https://git.nicolaischmid.de/wasc-npm/wasc-tools/commits/d79c1d4))



<a name="1.6.1"></a>
## [1.6.1](https://git.nicolaischmid.de/wasc-npm/wasc-tools/compare/v1.6.0...v1.6.1) (2018-04-13)


### Bug Fixes

* added babel-loader to dependencies ([14914eb](https://git.nicolaischmid.de/wasc-npm/wasc-tools/commits/14914eb))



<a name="1.6.0"></a>
# [1.6.0](https://git.nicolaischmid.de/wasc-npm/wasc-tools/compare/v1.5.1...v1.6.0) (2018-04-13)


### Features

* added source-map-support as peer dependency and added note in README for explanation ([9aa909b](https://git.nicolaischmid.de/wasc-npm/wasc-tools/commits/9aa909b))



<a name="1.5.1"></a>
## [1.5.1](https://git.nicolaischmid.de/wasc-npm/wasc-tools/compare/v1.5.0...v1.5.1) (2018-04-12)


### Bug Fixes

* removed cleanwebpackplugin import from webpack config ([9e5ecf7](https://git.nicolaischmid.de/wasc-npm/wasc-tools/commits/9e5ecf7))



<a name="1.5.0"></a>
# [1.5.0](https://git.nicolaischmid.de/wasc-npm/wasc-tools/compare/v1.4.2...v1.5.0) (2018-04-12)


### Bug Fixes

* removed cleanwebpack plugin, since nodemon throws if build folder is not existent ([e6c6bd1](https://git.nicolaischmid.de/wasc-npm/wasc-tools/commits/e6c6bd1))


### Features

* added progressBarPlugin to webpack config ([f54ab6c](https://git.nicolaischmid.de/wasc-npm/wasc-tools/commits/f54ab6c))
* **watch:** added closing handler to stop webpacks watching ([b7dc272](https://git.nicolaischmid.de/wasc-npm/wasc-tools/commits/b7dc272))



<a name="1.4.2"></a>
## [1.4.2](https://git.nicolaischmid.de/wasc-npm/wasc-tools/compare/v1.4.1...v1.4.2) (2018-04-12)


### Bug Fixes

* error object naming ([71c9a5c](https://git.nicolaischmid.de/wasc-npm/wasc-tools/commits/71c9a5c))



<a name="1.4.1"></a>
## [1.4.1](https://git.nicolaischmid.de/wasc-npm/wasc-tools/compare/v1.4.0...v1.4.1) (2018-04-12)


### Bug Fixes

* type nodemon ([476fa27](https://git.nicolaischmid.de/wasc-npm/wasc-tools/commits/476fa27))



<a name="1.4.0"></a>
# [1.4.0](https://git.nicolaischmid.de/wasc-npm/wasc-tools/compare/v1.3.2...v1.4.0) (2018-04-12)


### Bug Fixes

* exit build script if mode is not provided ([8bc1683](https://git.nicolaischmid.de/wasc-npm/wasc-tools/commits/8bc1683))


### Features

* added mode: production to build command ([a60658c](https://git.nicolaischmid.de/wasc-npm/wasc-tools/commits/a60658c))
* added watch script for watching build tasks and serving automatically with nodemon ([9416781](https://git.nicolaischmid.de/wasc-npm/wasc-tools/commits/9416781))



<a name="1.3.2"></a>
## [1.3.2](https://git.nicolaischmid.de/wasc-npm/wasc-tools/compare/v1.3.1...v1.3.2) (2018-04-12)


### Bug Fixes

* added nsp ignore to ignore the vulnerability in webpack ([209dff1](https://git.nicolaischmid.de/wasc-npm/wasc-tools/commits/209dff1))



<a name="1.3.1"></a>
## [1.3.1](https://git.nicolaischmid.de/wasc-npm/wasc-tools/compare/v1.3.0...v1.3.1) (2018-04-12)


### Bug Fixes

* added source-map support to webpack config for accurate stack traces ([4a91182](https://git.nicolaischmid.de/wasc-npm/wasc-tools/commits/4a91182))



<a name="1.3.0"></a>
# [1.3.0](https://git.nicolaischmid.de/wasc-npm/wasc-tools/compare/v1.2.0...v1.3.0) (2018-04-12)


### Bug Fixes

* fixed code count non supported extension error ([8d575e8](https://git.nicolaischmid.de/wasc-npm/wasc-tools/commits/8d575e8))
* fixed todo script by using leasots integrated file type detection ([7f66632](https://git.nicolaischmid.de/wasc-npm/wasc-tools/commits/7f66632))


### Features

* exported prettier and eslint configs for usage with IDE tooling ([82c9d36](https://git.nicolaischmid.de/wasc-npm/wasc-tools/commits/82c9d36))
* implemented backend building with webpack ([aa296d1](https://git.nicolaischmid.de/wasc-npm/wasc-tools/commits/aa296d1))



<a name="1.2.0"></a>
# [1.2.0](https://git.nicolaischmid.de/wasc-npm/wasc-tools/compare/v1.1.3...v1.2.0) (2018-03-29)


### Bug Fixes

* **todo:** added a lot of not supported extensions and put them in an array ([0cb02c4](https://git.nicolaischmid.de/wasc-npm/wasc-tools/commits/0cb02c4))


### Features

* **format:** added build, dist and other miscellaneous directories to prettierignore ([7b418b4](https://git.nicolaischmid.de/wasc-npm/wasc-tools/commits/7b418b4))



# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.
