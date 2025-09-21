import js from "@eslint/js";
import globals from "globals";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  // Use ESLint’s recommended config
  js.configs.recommended,

  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,   // ✅ allow process, require, module, etc.
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
    },
  },

  {
    files: ["tests/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.jest,   // ✅ allow describe, test, expect, etc.
      },
    },
  },
];

