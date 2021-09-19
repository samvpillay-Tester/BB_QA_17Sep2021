# Template to use TypeScript with k6
https://github.com/grafana/k6-template-typescript

## CAUTION !
Ensure adherance to the heroku load testing guidelines, unless this is your private app \ you have approval
If in doubt, preferrably do not use the scripts.
https://devcenter.heroku.com/articles/load-testing-guidelines

These scripts have only been tested to minimal levels, rather than the suggested options applied from:
https://k6.io/docs/test-types

## Prerequisites

- [k6](https://k6.io/docs/getting-started/installation)
- [NodeJS](https://nodejs.org/en/download/)
- [Yarn](https://yarnpkg.com/getting-started/install) (optional)

## Running the test

To run a test written in TypeScript, we first have to transpile the TypeScript code into JavaScript and bundle the project

```bash
$ yarn webpack
```

This command creates the final test files to the `./dist` folder.

Once that is done, we can run our script the same way we usually do, for instance:

```bash
$ k6 run dist/load.js
$ k6 run dist/soak.js
$ k6 run dist/spike.js
$ k6 run dist/stress.js
```

### Transpiling and Bundling

By default, k6 can only run ES5.1 JavaScript code. To use TypeScript, we have to set up a bundler that converts TypeScript to JavaScript code. 

This project uses `Babel` and `Webpack` to bundle the different files - using the configuration of the [`webpack.config.js`](./webpack.config.js) file.

If you want to learn more, check out [Bundling node modules in k6](https://k6.io/docs/using-k6/modules#bundling-node-modules).
