/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: "node",
  transform: {},

  // Force coverage collection
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.js", "!src/index.js"],

  // Ensure Jest writes JSON and LCOV files for CI
  coverageDirectory: "coverage",
  coverageReporters: ["json-summary", "json", "lcov", "text", "clover"],

  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
