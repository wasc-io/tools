## \wasc-tools\
A simple CLI for testing, linting, formatting Javascript projects, with the company required rules
```
wasc-tools [script]

    build  Build the project using webpack for usage with newer JS Syntax. 'backend' or 'frontend' flag is required to determine for what target to build
    watch  Run the build command, watch for changes and start running the compiled code with hot refreshing. 'backend' or 'frontend' flag is required to determine for what target to build
    lint   Liting all supported files with Eslint
    format Format all supported files with Prettier
    test   Running tests in test/ directory with mocha
    count  Count all lines and display stats about how many lines are commented, empty or contain TODOs
    todo   Parse all source files for TODOs and create a TODOS.md file with all results
```
The suggested usage is with NPM scripts like so:
```json
"scripts": {
    "start": "wasc-tools watch backend",
    "build": "wasc-tools build backend",
    "lint": "wasc-tools lint",
    "format": "wasc-tools format",
    "test": "wasc-tools test",
    "count": "wasc-tools count",
    "todo": "wasc-tools tood",
}
```

## Usage with IDE tooling
The project exports a `prettier.js` and `eslint.js` file with the accepted configurations. In your project just add an `.eslintrc.js` file:
```javascript
module.exports = require('@private/wasc-tools/eslint');
```
and a `prettier.config.js`:
```javascript
module.exports = require('@private/wasc-tools/prettier');
```