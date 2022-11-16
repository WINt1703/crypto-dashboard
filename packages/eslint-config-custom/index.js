module.exports = {
  plugins: ["@typescript-eslint"],
  extends: [
    "plugin:unicorn/recommended",
    "plugin:react-hooks/recommended",
    'plugin:react/recommended',
    'plugin:@next/next/recommended',
    'plugin:@typescript-eslint/recommended',    
  ],
  parser: "@typescript-eslint/parser",
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/jsx-curly-brace-presence': 'error',
    'unicorn/prevent-abbreviations': ['error', { allowList: { props: true, Props: true } }],
    'unicorn/prefer-module': "warn",
    'unicorn/filename-case': ['error', { case: 'camelCase' }],
    'no-console': 'warn',
    'react/self-closing-comp': 'error',
    'unicorn/prefer-node-protocol': 'off',
    '@next/next/no-html-link-for-pages': 'off'
  }
};
