#!/usr/bin/env node
"use strict";

// https://github.com/facebook/create-react-app/issues/3518
process.env.NODE_ENV = "production";

const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const webpackConfig = require(`${process.env.PWD}/node_modules/react-scripts/config/webpack.config`);

async function main() {
  const config = webpackConfig("production");
  config.plugins.push(
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      reportFilename: "report.html"
    })
  );

  const compiler = webpack(config);
  const build = new Promise((resolve, reject) => {
    console.info("Build app and generate report...");
    compiler.run((err, stats) => {
      let messages;
      if (err) {
        if (!err.message) {
          return reject(err);
        }

        let errMessage = err.message;

        // Add additional information for postcss errors
        if (Object.prototype.hasOwnProperty.call(err, "postcssNode")) {
          errMessage +=
            "\nCompileError: Begins at CSS selector " +
            err["postcssNode"].selector;
        }

        messages = {
          errors: [errMessage],
          warnings: []
        };
      } else {
        messages = stats.toJson({ all: false, warnings: true, errors: true });
      }
      if (messages.errors.length) {
        // Only keep the first error. Others are often indicative
        // of the same problem, but confuse the reader with noise.
        if (messages.errors.length > 1) {
          messages.errors.length = 1;
        }
        return reject(new Error(messages.errors.join("\n\n")));
      }
      if (
        process.env.CI &&
        (typeof process.env.CI !== "string" ||
          process.env.CI.toLowerCase() !== "false") &&
        messages.warnings.length
      ) {
        console.info(
          chalk.yellow(
            "\nTreating warnings as errors because process.env.CI = true.\n" +
              "Most CI servers set it automatically.\n"
          )
        );
        return reject(new Error(messages.warnings.join("\n\n")));
      }

      return resolve({
        stats,
        warnings: messages.warnings
      });
    });
  });
  await build;

  process.exit();
}

main();
