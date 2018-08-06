# \wasc-tools\
# [![wasc-tools](docs/carbon.png)](https://github.com/wasc-io/tools)
Opinionated toolkit for every JavaScript project in need 🚨

## Usage
This tools provides most of the required tools for a big JS project. It transpiles with, it lints, it pretties, it tests and it even counts lines of code. All behind an easy cli.
For big projects we recommend to use the tool inside the package.json's scripts-tag:

```json
"scripts": {
    "start": "wasc-tools watch backend --debug",
    "build": "wasc-tools build backend",
    "lint": "wasc-tools lint",
    "format": "wasc-tools format",
    "test": "wasc-tools test",
    "count": "wasc-tools count",
    "todo": "wasc-tools todo",
}
```
## **!!!** IMPORTANT Note
For usage with the integrated start and build commands, you need to install the package `source-map-support`. It replaces all stacktraces, with resolved locations from the compiled source maps.

## Usage with IDE tooling
The project exports a `prettier.js` and `eslint.js` file with the accepted configurations. In your project just add an `.eslintrc.js` file:
```javascript
module.exports = require('@wasc/tools/eslint');
```
and a `prettier.config.js`:
```javascript
module.exports = require('@wasc/tools/prettier');
```

## [Changelog](CHANGELOG.md)