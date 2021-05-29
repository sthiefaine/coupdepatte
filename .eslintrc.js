module.exports = {
  root: true,
  env: {
    commonjs: true,
    node: true,
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  globals: {},
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "import", "react-hooks"],
  ignorePatterns: ["node_modules/"],
  rules: {
    "no-unused-vars": "off",
    "react/prop-types": "off",
    "react/no-unescaped-entities": "off",
  },
  settings: {
    react: {
      version: "latest", // "detect" automatically picks the version you have installed.
    },
  },
};
