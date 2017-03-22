
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

This project also uses [Next.js](https://github.com/zeit/next.js) to perform server-side rendering. As a result, Next.js is also responsible
for managing assets, processing css, and routing between components.

### Commands
* `yarn dev`
* `yarn build`
* `yarn start`
* `yarn test`

### Features
* ES2015+ (including async/await)
* React server-side rendering with Next.js
* SASS and PostCSS
* Assets from a static folder loaded by webpack
* Fetch Polyfill
* Unit testing through Jest

### Testing
Run `yarn test` in your terminal to initiate the Jest test watcher. Whenever code changes, unit tests will automatically run.

To write a test create a new file that is suffixed with `*.test.js`. For example: `myCompoment.test.js`. Jest will find these files and run them as tests.

### Extending Webpack
Add loaders and plugins to `next.config.js`. This will extend the webpack config used by Next.js underneath the hood.