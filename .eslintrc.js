module.exports = {
  env: {
    es6: true,
    browser: true,
    es2020: true,
  },
  extends: [
    "react-app",
    "airbnb",
    "eslint:recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "prettier/react",
  ],
  plugins: [
    "jsx-a11y",
    "prettier",
  ],
  rules: {
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
  },
};
