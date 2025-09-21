/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: "node",
  transform: {},

  // Collect coverage for all JS files in src/, except index.js
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.js", "!src/index.js"],

  // Directory where Jest outputs coverage files
  coverageDirectory: "coverage",

  // Reporters ensure JSON + LCOV + text output
  coverageReporters: ["json", "lcov", "text", "clover"],

  // Enforce thresholds (CI will fail if below these)
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
