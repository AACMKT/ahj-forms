/** @type {import('jest-environment-puppeteer').JestPuppeteerConfig} */
module.exports = {
    server: {
      command: "webpack-dev-server --mode development",
      port: 8080,
    },
  };