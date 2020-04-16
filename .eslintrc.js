module.exports = {
  plugins: ['import', 'react', 'jsx-a11y', 'jest', 'react-hooks'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    mocha: true,
    'jest/globals': true,
  },
  extends: ['airbnb'],
  rules: {
    'max-len': 0,
    camelcase: 0,
    'no-restricted-globals': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/state-in-constructor': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-one-expression-per-line': 0,
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'import/prefer-default-export': 0,
    'import/no-cycle': 'warn',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'jsx-a11y/anchor-is-valid': ['error', { 
      components: ['Link'], specialLink: ['to']
    }],
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'no-console': 'error',
    'react/jsx-props-no-spreading': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/no-array-index-key': 0,
  },
};
