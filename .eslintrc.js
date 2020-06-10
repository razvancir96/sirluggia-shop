module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    // TODO: add prop types in the future
    "react/prop-types": 0,
    // TODO: find a better way to avoid eslint(react part) and prettier conflict
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-indent-props": 0,
    "react/jsx-curly-newline": 0,
    "react/jsx-closing-bracket-location": 0,
    "react/jsx-indent": 0,
    // remove annoying CR error(probably due to VSCode/Git)
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "react/jsx-props-no-spreading": 0,
    // TODO: find a way to do this only for tests
    "import/first": 0,
  },
};
