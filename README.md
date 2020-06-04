[![npm][npm]][npm-url]
[![node][node]][node-url]
[![downloads][downloads]][downloads-url]

This package allows to use [webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer) with [create-react-app](https://create-react-app.dev), without having to eject the react application.

It's an alternative to the official [source-map-explorer](https://create-react-app.dev/docs/analyzing-the-bundle-size).

## Installation

```bash
# NPM
npm install --save-dev cra-bundle-analyzer
# Yarn
yarn add -D cra-bundle-analyzer
```

## Usage

```bash
npx cra-bundle-analyzer
```

## Options

```
  -r, --reportFilename <file>         Path to bundle report file that will be generated in `static` mode. (default: report.html)
```

This command will generate the webpack-bundle-analyzer report in `build/report.html`

## References

- [Github Issue #6904: --stats flag is gone in v3?](https://github.com/facebook/create-react-app/issues/6904)
- [Github Issue #3518: webpack-bundle-analyzer without ejecting.](https://github.com/facebook/create-react-app/issues/3518)
- [Medium @romanonthego: webpack-bundle-analyzer for create-react-app](https://medium.com/@romanonthego/webpack-bundle-analyzer-for-create-react-app-9aebb0d01084)

[npm]: https://img.shields.io/npm/v/cra-bundle-analyzer.svg
[npm-url]: https://npmjs.com/package/cra-bundle-analyzer
[node]: https://img.shields.io/node/v/cra-bundle-analyzer.svg
[node-url]: https://nodejs.org
[deps]: https://david-dm.org/webpack-contrib/cra-bundle-analyzer.svg
[deps-url]: https://david-dm.org/webpack-contrib/cra-bundle-analyzer
[tests]: http://img.shields.io/travis/webpack-contrib/cra-bundle-analyzer.svg
[tests-url]: https://travis-ci.org/webpack-contrib/cra-bundle-analyzer
[downloads]: https://img.shields.io/npm/dt/cra-bundle-analyzer.svg
[downloads-url]: https://npmjs.com/package/cra-bundle-analyzer
