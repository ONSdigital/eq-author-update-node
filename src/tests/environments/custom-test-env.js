/**
 * Runs when TextEncoder is not defined.
 * https://stackoverflow.com/questions/25112510/how-to-set-environment-variables-from-within-package-json
 * jsdom doesn't have TextEncoder defined in global for node version 16.
 */

const Environment = require("jest-environment-jsdom");
module.exports = class CustomTestEnvironment extends Environment {
  async setup() {
    await super.setup();
    if (typeof this.global.TextEncoder === "undefined") {
      const { TextEncoder } = require("util");
      this.global.TextEncoder = TextEncoder;
    }
  }
};
